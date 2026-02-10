exports.successResponse = (res, data) => {
  return res.status(200).json({
    is_success: true,
    official_email: process.env.OFFICIAL_EMAIL,
    data
  });
};
exports.errorResponse = (res, status, message) => {
  return res.status(status).json({
    is_success: false,
    error: message
  });
};