import React from 'react';
import Image from 'next/image'
import Vector from '../../../assets/images/svg/Arrow 1.svg';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../store/slice/ModalSlice';

export default function Button() {
  const dispatch = useDispatch();
  return (
    <div className='btn' onClick={() => dispatch(showModal(true))}>
      <p className="btn-text">Получить консультацию</p>
      <div className="btn-vector">
        <Image src={Vector} alt="" />
      </div>
    </div>
  )
}
