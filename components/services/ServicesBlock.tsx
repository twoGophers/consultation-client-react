import React from 'react';
import Services from './Services';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { showNavigation } from '../../store/slice/NavigationSlice';

//Api
import { services } from '../../api/services/services.json';

export default function ServicesBlock() {
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
        { services.map( item => (
            <Services key={item.id} name={item.name} content={item.content} link={item.link} image={item.image} />
        ))}
    </div>
  )
}
