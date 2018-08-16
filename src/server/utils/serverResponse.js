const debug = require('debug')('http');


export function sendError(res, status, message) {
  return ((err) => {
    debug(err);
    return res.status(status).json({
      failed: message,
    });
  });
}

export function sendSuccess(res, message) {
  return (() => res.status(200).json({
    success: message,
  }));
}


export function sendSuccessLong(res, message, obj) {
  return (() => res.status(200).json({
    success: message,
    ...obj,
  }));
}
