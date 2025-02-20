### Install ZazzPlayout

**Note:** This is the official and supported way.

ZazzPlayout provides ***.deb** and ***.rpm** packages, which makes it easier to install and use, but there are still some steps to follow.

1. Download the latest ZazzPlayout from the [release](https://github.com/Altair525/ZazzPlayout/releases/latest) page and place the package in the **/tmp** folder
2. Install it with `apt install /tmp/ZazzPlayout_<VERSION>_amd64.deb`
3. Install ffmpeg/ffprobe, or compile and copy them to **/usr/local/bin/**
4. Initialize the defaults and add a global admin user: `sudo -u zazzff zazzplayout -i`
5. Use a reverse proxy for SSL; the port is **8787**
6. Log in with your browser. The address without a proxy would be: **http://[IP ADDRESS]:8787**

### Manual Install

**Note:** This is for advanced users only.

- Install ffmpeg/ffprobe, or compile and copy them to **/usr/local/bin/**
- Download the latest archive from the [release](https://github.com/Altair525/ZazzPlayout/releases/latest) page
- Copy the ZazzPlayout binary to `/usr/bin/`
- Copy **assets/ZazzPlayout.yml** to `/etc/ZazzPlayout`
- Create the folder `/var/log/ZazzPlayout`
- Create the system user **ffpu**
- Give ownership of `/etc/ZazzPlayout` and `/var/log/ZazzPlayout` to **ffpu**
- Copy **assets/ZazzPlayout.service** to `/etc/systemd/system`
- Copy **assets/ZazzPlayout.1.gz** to `/usr/share/man/man1/`
- Copy the **public** folder to `/usr/share/ZazzPlayout/`
- Activate the service and run it: `systemctl enable --now ZazzPlayout`
- Initialize the defaults and add a global admin user: `sudo -u ffpu ZazzPlayout -i`
