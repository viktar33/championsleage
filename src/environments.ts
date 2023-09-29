const prod = 'https://testviktor.somee.com';
const dev = 'https://testviktor.somee.com';

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
