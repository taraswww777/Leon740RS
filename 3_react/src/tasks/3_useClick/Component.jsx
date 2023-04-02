import React, { useEffect } from 'react';
import useClick from './useClick';

function Component() {
  const [buttonIsClicked, buttonRf] = useClick();

  useEffect(() => {
    if (buttonRf.current) {
      buttonRf.current.style.background = buttonIsClicked ? 'red' : 'blue';
    }
  }, [buttonIsClicked]);

  return (
    <button type="button" ref={buttonRf}>
      {buttonIsClicked ? 'true' : 'false'}
    </button>
  );
}
export default Component;
