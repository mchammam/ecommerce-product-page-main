import { RefObject } from 'react';

function useOnCLickOutsideOnce(
  ref: RefObject<HTMLElement>,
  callback: () => void
) {
  document.addEventListener('click', handleWindowClick, true);

  function handleWindowClick(event: MouseEvent) {
    if (!ref.current?.contains(event.target as Node)) {
      document.removeEventListener('click', handleWindowClick, true);
      callback();
    }
  }
}

export default useOnCLickOutsideOnce;
