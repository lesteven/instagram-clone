import { checkJson }from '../sanitizeData';


const object = {
  hello: 'hello',
  goodbye: '',
}
describe('checkJson', () => {
  it('should return false for empty values', () => {
    expect(checkJson(object)).toBe(false);
  })
  it('should return true for nonempty values', () => {
    const nonEmpty = {
      ...object,
      goodbye: 'goodbye',
    }
    expect(checkJson(nonEmpty)).toBe(true);
  })
})
