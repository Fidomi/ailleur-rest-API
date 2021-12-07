/* eslint-disable line-comment-position */
/* eslint-disable no-inline-comments */
/* eslint-disable sort-keys */
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1480px',
    desktop: '2560px'
};

const device = {
    mobileS: `(min-width: ${size.mobileS})`, // OK
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`, // OK
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`, // OK
    desktop: `(min-width: ${size.desktop})`
};

export default device;
