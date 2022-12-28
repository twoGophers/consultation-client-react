import React from 'react';
import Head from 'next/head';
import Screen1 from '../../components/Screen/Screen1';
import Consultation from '../../assets/images/profile.png';
import Main from '../../components/ui/blockBg/Main';
import TitleBlock from '../../components/ui/titleBlock/Titleblock';
import Margin from '../../components/ui/margin/Margin';
import ServicesBlock from '../../components/services/ServicesBlock';
import QuestionBlock from '../../components/questionBlock/QuestionBlock';
import GreenCard from '../../public/services/Green-card.png';

export default function helpgreencard() {
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
        <title>Грин карта</title>
        <meta name="description" content="Консультация для получения грин карты" />
      </Head>
      <Screen1 
        title={'Грин карта'}
        titleOne={''}
        titleTwo={''}
        content={'Заполнение по вашим данным, рекомендации, проверка на портале'}
        image={Consultation}
      />
        <Main >
            <TitleBlock title={'Грин карта'} />
            <Margin />
            <ServicesBlock>
            <QuestionBlock 
                title={'Он-лайн консультация'}
                time={'1 час'}
                cost={'40$'}
                titleQuestion={'Мы обсудим вопросы:'}
                question={ questionBlock }
                result={'эти и любые другие вопросы по оформлению грин карты'}
                image={ GreenCard }
                alt={'грин карта'}
              />
            </ServicesBlock>
        </Main>
        <div style={{ height: '100vh' }}></div>
    </>
  )
}
