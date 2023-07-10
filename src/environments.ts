const prod = 'http://viktar331-001-site1.btempurl.com';
const dev = 'https://localhost:7065';

export const config = process.env.NODE_ENV === 'development' ? dev : prod;