import React from 'react';
import Margin from '../ui/margin/Margin';
import Button from '../ui/button/Button';

export default function Screen1() {
  return (
    <div className='container screen1'>
        <div className="screen1_title">
            <h1>Консультация со мной - <br /><span>своевременный ответ <br /> для получение виз</span></h1>
            <Margin />
            <p className='screen1__text'>Консультирование, предложение вариантов в конкретном случае, постоянная обратная связь</p>
            <Margin />
            <Button />
        </div>
        <div className="screen1__img">
            sdfs
        </div>
    </div>
  )
}
