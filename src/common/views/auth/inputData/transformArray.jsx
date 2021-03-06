import React from 'react';


// transformation functions
export const filterName = object => object.name;

export const turnToObject = (acc, value) => {
  acc[value] = '';
  return acc;
};

export const arrToState = (arr) => {
  const filteredArr = arr.map(filterName);
  const state = filteredArr.reduce(turnToObject, {});
  return state;
};

export function mapInput(inputData) {
  return inputData.map(e =>
    (<input
      key={e.name}
      name={e.name}
      type={e.type}
      value={this.state[e.name]}
      placeholder={e.placeHolder}
      onChange={this.handleChange}
    />));
}

