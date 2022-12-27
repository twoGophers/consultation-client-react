import React from 'react';
import Head from 'next/head';
import Screen1 from '../../components/Screen/Screen1';
import Consultation from '../../assets/images/profile.png';
import Main from '../../components/ui/blockBg/Main';
import TitleBlock from '../../components/ui/titleBlock/Titleblock';
import Margin from '../../components/ui/margin/Margin';
import ServicesBlock from '../../components/services/ServicesBlock';
import QuestionBlock from '../../components/questionBlock/QuestionBlock';
import Cabinet from '../../public/services/cabinet.png';

export default function creatingpersonal() {

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
        <meta name="description" content="Консультация для получения туристической визы" />
      </Head>
      <Screen1 
        title={'Создание личного'}
        titleOne={'кабинета'}
        titleTwo={''}
        content={'Помощь в создании личного кабинета, оформление, рекомендации'}
        image={Consultation}
      />
        <Main >
            <TitleBlock title={'Создания личного кабинета'} />
            <Margin />
            <ServicesBlock>
            <QuestionBlock 
                title={'Он-лайн консультация'}
                time={'1 час'}
                cost={'40$'}
                titleQuestion={'Мы обсудим вопросы:'}
                question={ questionBlock }
                result={'эти и любые другие вопросы по оформлению визы в США'}
                image={ Cabinet }
                alt={'Cabinet'}
              />
            </ServicesBlock>
        </Main>
        <div style={{ height: '100vh' }}></div>
    </>
  )
}
