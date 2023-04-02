import React from 'react';
import { Button } from 'react-bootstrap';
import useLocalStorage from './useLocalStorage';

function Component(): JSX.Element {
  const [token, { setItemFn, removeItemFn }] = useLocalStorage('token');

  return (
    <>
      <h2>{token}</h2>
      <Button variant="success" onClick={() => setItemFn()}>
        set
      </Button>
      <Button variant="danger" onClick={() => removeItemFn()}>
        remove
      </Button>
    </>
  );
}

export default Component;
