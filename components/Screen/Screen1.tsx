import React, {useState} from 'react';
import Margin from '../ui/margin/Margin';
import Button from '../ui/button/Button';
import Modal from '../modal/Modal';

interface ScreenProps {
    title: string,
    titleOne: string,
    titleTwo: string,
    content: string,
    image: any,
}

export default function Screen1( { title, titleOne, titleTwo, content, image }: ScreenProps ) {

    const [show, setShow] = useState(false);

  return (
    <div className='container screen1'>
        <div className="screen1__title">
            <h1>{ title } <br /><span>{ titleOne } <br /> { titleTwo }</span></h1>
            <Margin />
            <p className='screen1__text'>{ content }</p>
            <Margin />
            <Button />
        </div>
        <div className="screen1__img">
            <div className="screen1__img-image" style={{ backgroundImage: `url(${image.src})` }} ></div>
        </div>
    </div>
  )
}
