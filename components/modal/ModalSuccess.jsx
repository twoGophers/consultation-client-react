import React from 'react';
import Image from 'next/image';
import SuccessModal from '../../assets/images/success.png';

export default function ModalSuccess() {
  return (
    <div className='modal-status'>
        <Image height={250} src={SuccessModal} alt={'success'} />
        <p className="modal-status__text">Заявка отправлена</p>
    </div>
  )
}
