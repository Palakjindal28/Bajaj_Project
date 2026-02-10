module.exports = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
    is_success: false,
    error: "Internal server error"
  });
};