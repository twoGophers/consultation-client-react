import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Screen1 from '../../components/Screen/Screen1';
import Consultation from '../../assets/images/profile.png';
import Main from '../../components/ui/blockBg/Main';
import TitleBlock from '../../components/ui/titleBlock/Titleblock';
import Margin from '../../components/ui/margin/Margin';
import ServicesBlock from '../../components/services/ServicesBlock';
import QuestionBlock from '../../components/questionBlock/QuestionBlock';
import Visa from '../../public/services/registrationVisa.png';
import CurrentQuestion from '../../components/currentQuestions/CurrentQuestion';

//Api
import axios from '../../axios';

export default function Tourist() {

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
        <title>Консультация</title>
        <meta name="description" content="Консультация для получения туристической визы. Стоимость, подготовка к собеседованию, сопровождение на всех этапах, ответы на часто задаваемые вопросы" />
      </Head>
      <Screen1 
        title={'Туристическая виза'}
        titleOne={''}
        titleTwo={''}
        content={'Консультация с Викторией по получению туристической визы в США'}
        image={Consultation}
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
                image={ Visa }
                alt={'Visa'}
              />
            </ServicesBlock>
            <Margin />
            <hr />
            <CurrentQuestion question_block={fetchQuest} title={'Актуальные вопросы'} />
        </Main>
    </>
  )
}
