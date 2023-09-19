const prod = 'https://testviktor.somee.com';
const dev = 'https://localhost:7065';

export const config = process.env.NODE_ENV === 'development' ? dev : prod;