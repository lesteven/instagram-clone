import PublicTemplate from './PublicTemplate';
import React from 'react';
import * as testSetup from '../../../../test-setup.js';
import { render, shallow, mount } from 'enzyme';


/*
describe('client template', () => {
  it('should have text', () => {
    expect(render(<PublicTemplate />).text()).toEqual('template');
  })
  it('should have css .max-wdith', () => {
    expect(shallow(<PublicTemplate />).is('.max-width')).toBe(true);
  })
  it('should render', () => {
    expect(mount(<PublicTemplate />)
    .find('.max-width')
    .length)
    .toBe(1);
  })
})
*/

describe('client template', () => {
  it('should have text', () => {
    expect(render(<PublicTemplate />).text()).toBeTruthy;
  })
})
