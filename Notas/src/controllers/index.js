function rootController(req, res) {
    const currentDate = new Date().toUTCString();
    const responseMessage = `Hello! This is the root endpoint. Server is running and the current date is: ${currentDate}`;
  
    const responseObject = {
      message: responseMessage,
      status: 'success',
      timestamp: currentDate,
    };
  
    res.status(200).json(responseObject);
  }
  module.exports = {
    rootController,
  };