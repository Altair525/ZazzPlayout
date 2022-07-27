use std::{
    path::Path,
    sync::{Arc, Mutex},
};

use regex::Regex;

use crate::utils::{Media, PlayoutConfig};

pub fn filter_node(
    config: &PlayoutConfig,
    node: Option<&Media>,
    filter_chain: &Arc<Mutex<Vec<String>>>,
) -> String {
    let mut filter = String::new();
    let mut font = String::new();

    if config.text.add_text {
        if Path::new(&config.text.fontfile).is_file() {
            font = format!(":fontfile='{}'", config.text.fontfile)
        }

        // TODO: in Rust 1.64 use let_chains instead
        if config.text.text_from_filename && node.is_some() {
            let source = node
                .unwrap_or(&Media::new(0, String::new(), false))
                .source
                .clone();
            let regex: Regex = Regex::new(&config.text.regex).unwrap();

            let text: String = match regex.captures(&source) {
                Some(t) => t[1].to_string(),
                None => source,
            };

            let escape = text
                .replace('\'', "'\\\\\\''")
                .replace('%', "\\\\\\%")
                .replace(':', "\\:");
            filter = format!("drawtext=text='{escape}':{}{font}", config.text.style)
        } else if let Some(socket) = config.text.bind_address.clone() {
            let chain = filter_chain.lock().unwrap();
            let mut filter_cmd = format!("text=''{font}");

            if !chain.is_empty() {
                if let Some(link) = chain.iter().find(|&l| l.contains("text")) {
                    filter_cmd = link.to_string();
                }
            }

            filter = format!(
                "zmq=b=tcp\\\\://'{}',drawtext={filter_cmd}",
                socket.replace(':', "\\:")
            )
        }
    }

    filter
}
