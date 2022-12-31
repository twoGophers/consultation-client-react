import React, { useState, useEffect } from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useWindowSize from '../scroll/useWindowSize';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

import AnchorLink from 'react-anchor-link-smooth-scroll' ;

export function HomeNavigation() {
  return (
    <>
      <AnchorLink href="#services" offset='150'>Услуги</AnchorLink>
      <AnchorLink href="#advantages" offset='150'>Преимущества</AnchorLink>
      <AnchorLink href="#rewiews" offset='150'>Отзывы</AnchorLink>
      <AnchorLink href="#currentQuestion" offset='150'>Актуальные вопросы</AnchorLink>
    </>
  )
}

export function OtherNavigation() {
  return (
    <>
      <Link href="/">Главная</Link>
      <AnchorLink href="#consultation" offset='150'>Консультация</AnchorLink>
      <AnchorLink href="#currentQuestion" offset='150'>Актуальные вопросы</AnchorLink>
    </>
  )
}

export function ConditionalityNavigation() {
  return (
    <>
      <Link href="/">Главная</Link>
    </>
  )
}

export default function Navigation() {
  const router = useRouter();
  const [ positionNavigation, setPositionNavigation ] = useState(false);
  const navigation = useSelector((state) => state.navigation.nav);
  const [ urlNavigation, setUrlNavigation ] = useState(null);
  const [ menuMobile, setMenuMobile ] = useState(false);
  const [ toogle, setToogle ] = useState(true);

  const windowSize = useWindowSize();

  const toogleMenu = () => {
    setToogle(!toogle);
  };

  useEffect(() => {
    if (router.pathname === '/') {
      setUrlNavigation(<HomeNavigation />);
    } else if (router.pathname === '/conditionality/conditionality') {
      setUrlNavigation(<ConditionalityNavigation />);
    } else {
      setUrlNavigation(<OtherNavigation />);
    }
  }, [router.pathname]);

  useEffect(() => {
    setPositionNavigation(navigation);
  }, [navigation]);

  useEffect(() => {
    if(windowSize.width < 768) {
      setMenuMobile(true);
    } else {
      setMenuMobile(false);
    }
  }, [windowSize])

  return (
    <>
        <nav 
          style={ positionNavigation ? { position: 'fixed', background: '#fff' } : {  position: "absolute" }}
          className={ positionNavigation ? 'nav-down' : 'nav-up' }
        >
            <div className="nav container">
                <div className="nav__link">
                  { menuMobile  
                    ? <div className="nav__mobile-menu">
                        { 
                          toogle 
                            ? <DehazeIcon className='show-menu' onClick={ toogleMenu } color="action" sx={{ fontSize: 35 }} />
                            : <CloseIcon className='show-menu' onClick={ toogleMenu } color="action" sx={{ fontSize: 35 }} />
                        }
                        {
                          toogle
                            ? true
                            : <div onClick={ toogleMenu } className="outside-block">
                                <div className="nav__mobile-menu-link show-menu">
                                  { urlNavigation }
                                </div>
                              </div> 
                        }
                      </div>
                    : urlNavigation 
                  }
                </div>
                <a href='tel: 89776115779' className="nav__contact">
                  <PhoneIphoneIcon style={{color : '#5e6d75'}} />: 8 977 611 57 79
                </a> 
            </div>
        </nav>
    </>
  )
}
