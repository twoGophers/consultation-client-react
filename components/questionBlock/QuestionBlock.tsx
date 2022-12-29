import React from 'react';
import Button from '../ui/button/Button';
import Margin from '../ui/margin/Margin';
import Person from '../../public/services/consultation.png';
import Image from 'next/image';

interface Question {
    title: string,
    time: string,
    cost: string,
    titleQuestion: string,
    question: string[],
    result: string,
    image: any,
    alt: string,
}

export default function QuestionBlock({ 
    title, 
    time, 
    cost, 
    titleQuestion, 
    question, 
    result,
    image,
    alt
    }: Question ) {
  return (
    <div id='consultation' className="question-block">
        <div className="question-block__container">
            <h3>{title}</h3>
            <p>Длительность: <span>{ time }</span></p>
            <p>Стоимость: <span>{ cost }</span> </p>
            <hr />
            <h3 className='question-block__question'>{ titleQuestion }</h3>
            <ul>
                { question.map( (item, index) => (
                    <li key={index} >{item}</li>
                )) }
            </ul>
            <p className='question-block__question'> { result } </p>
            <hr />
            <Margin />
            <Button />
        </div>
        <div className="question-block__right">
            <div className="question-block__right-img">
                <Image src={ image } fill alt={ alt } />
            </div>
        </div>
    </div>
  )
}
