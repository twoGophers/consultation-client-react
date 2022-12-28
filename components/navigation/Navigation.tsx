import React, { useState, useEffect } from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

export default function Navigation() {
  const [ positionNavigation, setPositionNavigation ] = useState(false);
  const navigation = useSelector((state: any) => state.navigation.nav);

  useEffect(() => {
    console.log(navigation);
    setPositionNavigation(navigation);
  }, [navigation]);
  return (
    <>
        <nav 
          style={ positionNavigation ? { position: 'fixed', background: '#fff' } : {  position: "absolute" }}
          className={ positionNavigation ? 'nav-down' : 'nav-up' }
        >
            <div className="nav container">
                <div className="nav__link">
                    <Link href="/">Главная</Link>
                </div> 
                <a href='tel: 89776115779' className="nav__contact">
                  <PhoneIphoneIcon style={{color : '#5e6d75'}} />: 8 977 611 57 79
                </a> 
            </div>
        </nav>
    </>
  )
}
