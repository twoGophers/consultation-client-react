import React from 'react';
import Services from './Services';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { showNavigation } from '../../store/slice/NavigationSlice';

export default function ServicesBlock({ children }: any ) {
    const blockRef = useRef(null);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const block: any = blockRef.current;
  
      function checkWindowBounds() {
        if (block.offsetTop <= window.scrollY - block.offsetHeight) {
          dispatch(showNavigation(true));
        } else {
          dispatch(showNavigation(false));
        }
      }
  
      window.addEventListener('scroll', checkWindowBounds);
  
      return () => {
        window.removeEventListener('scroll', checkWindowBounds);
      }
    }, []);
  return (
    <div ref={blockRef} className="services">
        { children }
    </div>
  )
}
