import Media from './media-templates';

const primaryBlue = '#007ac9';

const colors = {
  defaultTextColor: '#999',
  hslBlue: '#007ac9',
  errorTitle: '#DC0451'
};

const fontsizes = {
  small: '0.9em',
  medium: '1em',
  large: '1.1em',
  xlarge: '1.6em',
  xxlarge: '2em',
  xxxlarge: '3em'
};

const breakpoints = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px'
};

const hslTheme = {
  Media,
  color: 'red',
  primary: primaryBlue,
  primaryText: '#fff',
  primaryHover: '#0565a3',
  secondary: '#888',
  background: primaryBlue,
  menuBorder: '#0062a1',
  success: '#64be14',
  error: '#DB4F4F',
  info: '#58abc3',
  md: '900px',
  navbarHeight: '5rem',
  logoHeight: '4rem',
  logoFill: '#fff',
  radioBtnActive: '#0062a1',
  fontFamily: '"Gotham Rounded SSm A","Gotham Rounded SSm B"',
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '-0.5px',
  colors,
  fontsizes,
  breakpoints
};

export default hslTheme;
