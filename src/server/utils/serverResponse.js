export function sendError(res, status, message) {
  return (() => res.status(status).json({
    failed: message,
  }));
}

export function sendSuccess(res, message) {
  return (() => res.status(200).json({
    success: message,
  }));
}
