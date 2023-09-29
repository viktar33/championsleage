const prod = 'https://testviktor.somee.com';
const dev = 'https://localhost:7170';

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
