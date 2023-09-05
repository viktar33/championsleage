const prod = 'https://viktar222-001-site1.dtempurl.com';
const dev = 'https://localhost:7065';

export const config = process.env.NODE_ENV === 'development' ? dev : prod;