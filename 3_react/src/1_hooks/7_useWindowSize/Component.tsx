import React from 'react';
import useWindowSize from './useWindowSize';

function Component(): JSX.Element {
  const { width, height } = useWindowSize(1000);

  return (
    <>
      <p>width: {width}</p>
      <p>height: {height}</p>
    </>
  );
}

export default Component;
