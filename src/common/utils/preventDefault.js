const preventDefault = fn => (e) => {
  e.preventDefault();
  fn();
};

export default preventDefault;
