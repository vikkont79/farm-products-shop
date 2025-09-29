import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

.visually-hidden {
  position: absolute;
  scale: 0;
}

img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

html {
  block-size: 100%;
}

body,
html {
  margin: 0;
}

:root {
  /* Цвета */
  --color-bg-primary: ${props => props.theme.colors.bgPrimary};
  --color-text-primary: ${props => props.theme.colors.textPrimary};
  --color-button-primary: ${props => props.theme.colors.buttonPrimary};

  /* Шрифты */
    --font-family: ${props => props.theme.fonts.fontFamily};
    --font-size: ${props => props.theme.fonts.fontSize};
    --line-height: ${props => props.theme.fonts.lineHeight};
}

body {
  position: relative;
  inline-size: 1280px;
  block-size: 100%;
  margin-inline: auto;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-weight: 400;
  text-align: center;
}
`;

export { GlobalStyle };

