import Head from 'next/head';
import Screen1 from '../components/Screen/Screen1';
import SmoothScroll from '../components/scroll/SmoothScroll';
import background from '../assets/images/profile.png';
import Navigation from '../components/navigation/Navigation';
import Main from '../components/ui/blockBg/Main';
import TitleBlock from '../components/ui/titleBlock/Titleblock';
import Margin from '../components/ui/margin/Margin';
import ServicesBlock from '../components/services/ServicesBlock';
import Services from '../components/services/Services';

//Api
import { services } from '../api/services/services.json';
import { advantages } from '../api/advantages/advantages.json';
import { rewiews } from '../api/rewiews/rewiews.json';
import { question_block } from '../api/question-block/question_block.json';

import Advantages from '../components/advantages/Advantages';
import Reviews from '../components/reviews/Reviews';
import CurrentQuestion from '../components/currentQuestions/CurrentQuestion';

export default function Home() {
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
                { services.map( item => (
                    <Services key={item.id} name={item.name} content={item.content} link={item.link} image={item.image} />
                ))}
              </ServicesBlock>
              <Margin />
              <hr />
              <Margin />
              <Advantages advantag={advantages} title={'Преимущества'} />
              <Margin />
              <hr />
              <Reviews rewiews={rewiews} title={'Отзывы'} />
              <Margin />
              <hr />
              <CurrentQuestion question_block={question_block} title={'Актуальные вопросы'} />
            </Main>
          <div style={{ height: '100vh' }}></div>
      {/* </SmoothScroll> */}
    </div>
  )
}
