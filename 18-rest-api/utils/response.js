const sendSuccessResponse = (res, data) => {
  res.json({ success: true, data });
};

module.exports = {
  sendSuccessResponse,
};
