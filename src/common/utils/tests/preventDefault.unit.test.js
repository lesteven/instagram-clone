import preventDefault from '../preventDefault';


function test() {
  return 5;
}

const e = {
  preventDefault: jest.fn(),
}

describe('preventDefault', () => {
  it('should execute function', () => {
    expect(preventDefault(test)(e)).toBe(5);
  })
})
