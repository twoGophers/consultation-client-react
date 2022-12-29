import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { showNavigation } from '../../../store/slice/NavigationSlice';

export default function Main({ children } : any) {
  const blockRef = useRef(null);
  const dispatch = useDispatch();
  const [ scroll, setScroll ] = useState(0);

  useEffect(() => {
    const block: any = blockRef.current;

    function checkWindowBounds() {
      if (block.offsetTop <= scroll) {
        dispatch(showNavigation(true));
      } else {
        dispatch(showNavigation(false));
      }
    }

    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });

    window.addEventListener('scroll', checkWindowBounds);

    return () => {
      window.removeEventListener('scroll', checkWindowBounds);
    }
  }, [scroll]);
  return (
    <div ref={blockRef} className="main">
      <div className="container">
        { children }
      </div>
    </div>
  )
}
