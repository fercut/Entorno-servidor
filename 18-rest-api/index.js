const expressLoader = require('./app/loaders/express');
const mongooseLoader = require('./app/loaders/mongoose');

const PORT = process.env.PORT || 3000;

async function startServer() {
  await mongooseLoader();
  const app = expressLoader();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
