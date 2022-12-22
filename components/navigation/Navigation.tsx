import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export default function Navigation() {
  return (
    <>
        <nav>
            <div className="nav container">
                <div className="nav__link">
                    <a href="/">Услуги</a>
                    <a href="/">Стоимость</a>
                    <a href="/">Обо мне</a>
                    <a href="/">Контакты</a>
                </div>
                <a href='tel: 89776115779' className="nav__contact">
                  <PhoneIphoneIcon style={{color : '#5e6d75'}} />: 8 977 611 57 79
                </a> 
            </div>
        </nav>
    </>
  )
}
