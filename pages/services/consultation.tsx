import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Screen1 from '../../components/Screen/Screen1';
import ConsultationImg from '../../assets/images/profile.png';
import Main from '../../components/ui/blockBg/Main';
import TitleBlock from '../../components/ui/titleBlock/Titleblock';
import Margin from '../../components/ui/margin/Margin';
import ServicesBlock from '../../components/services/ServicesBlock';
import QuestionBlock from '../../components/questionBlock/QuestionBlock';
import Person from '../../public/services/consultation.png';
import CurrentQuestion from '../../components/currentQuestions/CurrentQuestion';

import axios from '../../axios';

export default function Consultation() {
  const [ fetchQuest, setFetchQuest ] = useState<any>();

  const fetchQuestion = async () => {
    try {
        const question = await axios.get('/questions/home');
        if(question.status === 200) {
            setFetchQuest(question.data);
        } 
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    fetchQuestion();
}, []);

  const questionBlock = [
    'Какой тип визы вам подходит?',
    'Какие документы необходимы для оформления визы?',
    'Этапы оформления визы',
    'Как записаться на собеседование?',
    'Где пройти собеседование на получение визы?',
    'Часто задаваемые вопросы на собеседовании ',
    'Как проходит собеседование с консулом и как отвечать на вопросы?',
    'Как оплачивать консульский сбор и что это такое?'
  ]

  return (
    <>
      <Head>
        <title>Консультация для получения туристической визы</title>
        <meta name="description" content="Индивидуальная консультация для получения туристической визы. " />
      </Head>
      <Screen1 
        title={'Консультация с'}
        titleOne={'Викторией'}
        titleTwo={''}
        content={'Консультация с Викторией по получению в США'}
        image={ConsultationImg}
      />
        <Main >
            <TitleBlock title={'Вопросы по получению визы в США'} />
            <Margin />
            <ServicesBlock>
              <QuestionBlock 
                title={'Он-лайн консультация'}
                time={'1 час'}
                cost={'40$'}
                titleQuestion={'Мы обсудим вопросы:'}
                question={ questionBlock }
                result={'эти и любые другие вопросы по оформлению визы в США'}
                image={ Person }
                alt={'Person'}
              />
            </ServicesBlock>
            <Margin />
            <hr />
            <CurrentQuestion question_block={fetchQuest} title={'Актуальные вопросы'} />
        </Main>
    </>
  )
}
