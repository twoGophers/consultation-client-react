import React from 'react';
import Image from 'next/image';
import ErrorModal from '../../assets/images/error.png';

export default function ModalError() {
  return (
    <div className='modal-status'>
        <Image src={ErrorModal} height={250}  alt={'error'} />
        <p className="modal-status__text">К сожалению такой email уже зарегистрированный</p>
    </div>
  )
}
