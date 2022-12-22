import React from 'react';
import Image from 'next/image'
import Vector from '../../../assets/images/svg/Arrow 1.svg';

export default function Button() {
  return (
    <div className='btn'>
      <p className="btn-text">Получить консультацию</p>
      <div className="btn-vector">
        <Image src={Vector} alt="" />
      </div>
    </div>
  )
}
