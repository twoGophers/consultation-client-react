import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
       <div className="footer container">
            <p>Наши контакты</p>
            <div className="footer__link">
                <a href='tel: 89776115779' target='_blank' rel="noopener noreferrer" >
                    <MailOutlineIcon sx={{ fontSize: 32 }} />
                </a>
                <a href="mailto:koptelovavictory@yandex.ru">
                    <PhoneIphoneIcon sx={{ fontSize: 32 }} />
                </a>
                <a href='tel: 89776115779' target='_blank' rel="noopener noreferrer" >
                    <InstagramIcon sx={{ fontSize: 32 }} />
                </a>
            </div>
            <span>
                Политика
                <Link href={'/conditionality/conditionality'}> кондефициальности</Link>
            </span>
       </div>
    </footer>
  )
}
