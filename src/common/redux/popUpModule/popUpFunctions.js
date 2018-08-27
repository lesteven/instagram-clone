
export const toggle = state => (state === 'flex' ? 'none' : 'flex');

export function toggleFn(e) {
  const { toggleClick } = this.props;
  e.preventDefault();
  toggleClick();
}
