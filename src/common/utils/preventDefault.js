const preventDefault = fn => (e) => {
  e.preventDefault();
  return fn();
};

export default preventDefault;
