import 'dotenv/config';

const config = {
      port: process.env.PORT || 8080,
<<<<<<< HEAD
    icon: {
        url: process.env.ICON_URL,
        apiKey: process.env.ICON_API_KEY,
=======
    smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        password: process.env.SMTP_PASSWORD,
>>>>>>> dfd062b0318b791dd9ba09840a4be63e47b75ac7
    },
}

export const jph = {
    url: process.env.JPH_URL,
}

export default config;
