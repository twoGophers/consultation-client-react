import React from 'react';
import Image from 'next/image';
import Succes from '../../../assets/images/svg/icons8-ok-48.svg';

export default function SuccessForm() {
  return (
    <div className='succes-form'>
        <div className="succes-form__modal">
            <Image src={Succes} alt={Succes} width={200} height={200} />
        </div>
    </div>
  )
}
