import React from 'react';
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
  return (
    <Link href={`services${link}`} className="services__block">
        <div className="services__block-content">
            <h3>{name}</h3>
            <Margin />
            <p className='content'>{content}</p>
        </div>
        <div className="services__block-image">
            <img src={`/services/${image}`} alt={`/services/${image}`} />
        </div>
    </Link>
  )
}
