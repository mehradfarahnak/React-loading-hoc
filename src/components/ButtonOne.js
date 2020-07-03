import React from 'react';
import withLoading from '../HOC/withLoading';

const ButtonOne = (props) => {
  return <button>I am ButtonOne</button>;
};

export default withLoading(ButtonOne);
