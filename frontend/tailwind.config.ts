import daisyui from 'daisyui'
import svgToDataUri from 'mini-svg-data-uri'

module.exports = {
    theme: {
        extend: {
            backgroundImage: (theme: any) => ({
                'multiselect-caret': `url("${svgToDataUri(
                    `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>`
                )}")`,
                'multiselect-spinner': `url("${svgToDataUri(
                    `<svg viewBox="0 0 512 512" fill="${theme(
                        'colors.green.500'
                    )}" xmlns="http://www.w3.org/2000/svg"><path d="M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z"></path></svg>`
                )}")`,
                'multiselect-remove': `url("${svgToDataUri(
                    `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>`
                )}")`,
            }),
            maskImage: (theme: any) => ({
                'multiselect-caret': `url("${svgToDataUri(
                    `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>`
                )}")`,
                'multiselect-spinner': `url("${svgToDataUri(
                    `<svg viewBox="0 0 512 512" fill="${theme(
                        'colors.green.500'
                    )}" xmlns="http://www.w3.org/2000/svg"><path d="M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z"></path></svg>`
                )}")`,
                'multiselect-clear-icon': `url("${svgToDataUri(
                    `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>`
                )}")`,
                'multiselect-tag-remove-icon': `url("${svgToDataUri(
                    `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>`
                )}")`,
            }),
            borderWidth: {
                title: '0.1rem',
            },
            boxShadow: {
                '3xl': '0 1em 5em rgba(0, 0, 0, 0.3)',
                glow: '0 0 10px rgba(0, 0, 0, 0.3)',
            },
            colors: {
                'my-gray': 'var(--my-gray)',
            },
            fontFamily: {
                sans: ['Source Sans Pro', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            fontSize: {
                xxs: '10px',
                sm: '14px',
                base: '15px',
                lg: '20px',
                xl: '24px',
            },
            screens: {
                xxs: '374px',
                xs: '500px',
                '2xs': '739px',
                '2sm': '825px',
                '2md': '876px',
                '4xl': { min: '1971px' },
            },
            transitionProperty: {
                height: 'height',
            },
        },
    },
    safelist: [
        'alert-success',
        'alert-warning',
        'alert-info',
        'alert-error',
    ],
    daisyui: {
        themes: [
            {
                light: {
					'color-scheme': 'light',
					primary: '#8fbf60', // Verde médio equilibrado
					'base-content': '#222222', // Texto preto para contraste
					secondary: '#bfe6a8', // Verde pastel para áreas secundárias
					accent: '#6d9f50', // Verde discreto para realce
					'base-100': '#d7f3c2', // Fundo verde pastel suave
					'base-200': '#bfe6a8', // Verde um pouco mais escuro para separação
					'base-300': '#aac896', // Verde acinzentado para profundidade
					neutral: '#2B3440', 
					'neutral-focus': '#343232',
					info: '#005082', // Azul escuro para logs
					success: '#146314', // Verde escuro
					warning: '#946c00', // Amarelo queimado
					error: '#8b0000', // Vermelho escuro
					'--base-100': '#d7f3c2',
					'--base-200': '#bfe6a8',
					'--base-300': '#aac896',
					'--my-accent': '#6d9f50',
					'--my-gray': '#6b6b6b',
					'--my-purple': '#701a75',
					'--my-yellow': '#bea203',
					'--my-blue': '#436e9c',
					'--my-green': '#8fbf60',
				},
                dark: {
					'color-scheme': 'dark',
					primary: '#3b3b3b', // Cinza médio para elementos principais
					'base-content': '#E0E0E0', // Cinza claro para leitura confortável
					secondary: '#b0b0b0', // Cinza equilibrado para elementos secundários
					accent: '#e07b14', // Laranja queimado, mais elegante
					'base-100': '#252525', // Fundo principal mais suave
					'base-200': '#1c1c1c', // Cinza escuro para camadas secundárias
					'base-300': '#141414', // Tom quase preto para maior profundidade
					neutral: '#272626',
					'neutral-focus': '#343232',
					info: '#4c8dc7', // Azul mais sofisticado
					success: '#5faf5f', // Verde mais equilibrado
					warning: '#e0a500', // Amarelo dourado refinado
					error: '#d64b3c', // Vermelho queimado, menos agressivo
					'--base-100': '#252525',
					'--base-200': '#1c1c1c',
					'--base-300': '#141414',
					'--my-accent': '#e07b14',
					'--my-gray': '#919191',
					'--my-purple': '#9370db', // Roxo discreto
					'--my-yellow': '#e0a500',
					'--my-blue': '#4c8dc7',
					'--my-green': '#5faf5f',
				},
            },
        ],
    },
    plugins: [daisyui],
}
