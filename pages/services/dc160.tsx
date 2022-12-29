import React from 'react';
import Head from 'next/head';
import Screen1 from '../../components/Screen/Screen1';
import Consultation from '../../assets/images/profile.png';
import Main from '../../components/ui/blockBg/Main';
import TitleBlock from '../../components/ui/titleBlock/Titleblock';
import Margin from '../../components/ui/margin/Margin';
import ServicesBlock from '../../components/services/ServicesBlock';
import QuestionBlock from '../../components/questionBlock/QuestionBlock';
import DC160 from '../../public/services/dc160.png';
import CurrentQuestion from '../../components/currentQuestions/CurrentQuestion';

//Api
import { question_block } from '../../api/question-block/question_block.json';

export default function dc160() {
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
        <title>Проверка DC 160</title>
        <meta name="description" content="Консультация заполнения анкеты DC 160" />
      </Head>
      <Screen1 
        title={'Проверка DC 160'}
        titleOne={''}
        titleTwo={''}
        content={'Проверка DC 160 на наличие ошибок, рекомендации заполнения.'}
        image={Consultation}
      />
        <Main >
            <TitleBlock title={'DC 160'} />
            <Margin />
            <ServicesBlock>
            <QuestionBlock 
                title={'Он-лайн консультация'}
                time={'1 час'}
                cost={'40$'}
                titleQuestion={'Мы обсудим вопросы:'}
                question={ questionBlock }
                result={'эти и любые другие вопросы по оформлению анкеты DC 160'}
                image={ DC160 }
                alt={'DC160'}
              />
            </ServicesBlock>
            <Margin />
            <hr />
            <CurrentQuestion question_block={question_block} title={'Актуальные вопросы'} />
        </Main>
    </>
  )
}
