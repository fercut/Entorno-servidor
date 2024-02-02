import 'dotenv/config';

const app = {
    port:process.env.PORT || 8080,
    secretKey: process.env.SECRET_KEY,
}

const config = {
    app,
}

export default config;