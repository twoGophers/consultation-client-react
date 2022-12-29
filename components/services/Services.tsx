import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Margin from '../ui/margin/Margin';

interface Services {
    name: String,
    content: String,
    link: String,
    image: String
}

export default function Services({ name, content, link, image }: Services) {

  const [ hoverImg, setHoverImg ] = useState(false);

  return (
    <Link id="services" onMouseLeave={() => setHoverImg(false)} onMouseMove={() => setHoverImg(true)} href={`services${link}`} className="services__block">
        <div className="services__block-content">
            <h3>{name}</h3>
            <Margin />
            <p className='content'>{content}</p>
        </div>
        <div className={ hoverImg ? "block-translate" : "services__block-image"}>
            <img src={`/services/${image}`} alt={`/services/${image}`} srcSet="" />
        </div>
    </Link>
  )
}
