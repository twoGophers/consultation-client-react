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
            </Main>
          <div style={{ height: '100vh' }}></div>
      {/* </SmoothScroll> */}
    </div>
  )
}
