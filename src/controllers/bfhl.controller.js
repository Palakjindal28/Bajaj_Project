const fibonacciService = require("../services/math/fibonacci.service");
const primeService = require("../services/math/prime.service");
const lcmService = require("../services/math/lcm.service");
const hcfService = require("../services/math/hcf.service");
const aiService = require("../services/ai/ai.service");
const { successResponse, errorResponse } = require("../utils/response.util");
exports.handleBFHL = async (req, res, next) => {
  try {
    const body = req.body;
    const keys = Object.keys(body);
    if (keys.length !== 1) {
      return errorResponse(res, 400, "Request must contain exactly one key");
    }
    const key = keys[0];
    const value = body[key];
    let data;
    switch (key) {
      case "fibonacci":
        if (!Number.isInteger(value) || value < 0) {
          return errorResponse(
            res,
            400,
            "Fibonacci requires a non-negative integer"
          );
        }
        data = fibonacciService.generate(value);
        break;
      case "prime":
        if (!Array.isArray(value)) {
          return errorResponse(
            res,
            400,
            "Prime requires an array of integers"
          );
        }
        data = primeService.filter(value);
        break;
      case "lcm":
        if (!Array.isArray(value) || value.length < 2) {
          return errorResponse(
            res,
            400,
            "LCM requires an array of at least 2 integers"
          );
        }
        data = lcmService.calculate(value);
        break;
      case "hcf":
        if (!Array.isArray(value) || value.length < 2) {
          return errorResponse(
            res,
            400,
            "HCF requires an array of at least 2 integers"
          );
        }
        data = hcfService.calculate(value);
        break;
      case "AI":
        if (typeof value !== "string" || value.trim().length === 0) {
          return errorResponse(
            res,
            400,
            "AI input must be a non-empty string"
          );
        }
        data = await aiService.ask(value);
        break;
      default:
        return errorResponse(res, 400, "Invalid key");
    }
    return successResponse(res, data);
  } catch (err) {
    next(err);
  }
};