import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Screen1 from '../components/Screen/Screen1';
import SmoothScroll from '../components/scroll/SmoothScroll';
import background from '../assets/images/profile.png';
import Main from '../components/ui/blockBg/Main';
import TitleBlock from '../components/ui/titleBlock/Titleblock';
import Margin from '../components/ui/margin/Margin';
import ServicesBlock from '../components/services/ServicesBlock';
import Services from '../components/services/Services';

//Api
import  services  from '../api/services/services.json';
import  advantages  from '../api/advantages/advantages.json';
import  rewiews  from '../api/rewiews/rewiews.json';
import axios from '../axios';

import Advantages from '../components/advantages/Advantages';
import Reviews from '../components/reviews/Reviews';
import CurrentQuestion from '../components/currentQuestions/CurrentQuestion';

export default function Home() {

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

  return (
    <div>
      <Head>
        <title>Консультация</title>
        <meta name="description" content="Консультация для получения туристической визы" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SmoothScroll> */}
          <Screen1 
            title={'Консультация со мной -'}
            titleOne={'своевременный ответ'} 
            titleTwo={'для получение виз'}
            content={'Консультирование, предложение вариантов в конкретном случае, постоянная обратная связь'}
            image={background}
          />
            <Main >
              <TitleBlock title={'Услуги'} />
              <Margin />
              <ServicesBlock>
                { services.services.map( item => (
                    <Services key={item.id} name={item.name} content={item.content} link={item.link} image={item.image} />
                ))}
              </ServicesBlock>
              <Margin />
              <hr />
              <Margin />
              <Advantages advantag={advantages.advantages} title={'Преимущества'} />
              <Margin />
              <hr />
              <Reviews rewiews={rewiews.rewiews} title={'Отзывы'} />
              <Margin />
              <hr />
              <CurrentQuestion question_block={fetchQuest} title={'Актуальные вопросы'} />
            </Main>  
      {/* </SmoothScroll> */}
    </div>
  )
}
