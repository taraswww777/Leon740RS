import { useEffect, useRef, useState } from 'react';

export default function useClick() {
  const ref = useRef();
  const [isClicked, setIsClicked] = useState(false);

  const onClickFn = () => {
    console.log('click');
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('click', onClickFn);

      return () => {
        node.removeEventListener('click', onClickFn);
      };
    }
  }, []);

  return [isClicked, ref];
}
