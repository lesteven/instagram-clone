
export function resetState(cleanState) {
  this.setState(cleanState);
}

export function reset(cleanState) {
  return () => this.setState(cleanState);
}
