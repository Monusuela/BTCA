import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Title from 'antd/es/typography/Title';
import { Col } from 'antd';
import Container from './container';


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
     <div className='Slider'>
     <div className="Slider_container">
      <Container className={"container__left"}>
        <Col className="slider__col" >
          <Title className="slider__col-title">Часто задаваемые Вопросы</Title>
          <p className="slider-col__text" >Категории</p>
          <ul className={`list-none slider__col-list`}>
            <li className="slider__col-list-li1">Финансы</li>
            <li className="slider__col-list-li2">Начало</li>
            <li className="slider__col-list-li2">Лицензии</li>
            <li className="slider__col-list-li2">Лицензии</li>
          </ul>
        </Col>
      </Container>
    </div>

    <div>
    <Container>
        <div className='acordion'>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
            id="panel" >
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography id="panel-typography">
                Что такое Proof of Stake?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Аббревиатура POS расшифровывается как point of sale,
                что в переводе с английского означает «торговая точка».
                POS-кредит — это разновидность экспресс-займа, который можно
                получить без визита в банк, прямо в торговой точке: магазине,
                гипермаркете, салоне продаж.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
            id="panel">
            <AccordionSummary
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography id="panel-typography">
                В чем преимущества PoS перед PoW?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Главное преимущество PoS — это скорость. Многие
                PoW-блокчейны (например, Биткоин) никогда не смогут
                обрабатывать транзакции так же быстро, как PoS-блокчейны.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
            id="panel">
            <AccordionSummary
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography id="panel-typography">
                Что такое стекинг?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Стейкинг — это процесс блокировки монет, который помогает
                обезопасить блокчейн-сеть. Соответственно, владелец заблокированных
                криптоактивов помогает сети и получает за это вознаграждение,
                причём проценты доходности отличаются в зависимости от блокчейна.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
            id="panel">
            <AccordionSummary
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography id="panel-typography"
              >Как работает стекинг?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Когда у пользователя есть хотя бы 1 PIV в полностью
                синхронизированном основном кошельке PIVX, этому узлу
                разрешается участвовать в сети с соответствующей суммой стекинга.
                PIVX использует расширенный алгоритм Proof of Stake, который
                эффективно защищает сеть от злоумышленников. Это позволяет владельцам
                PIVX получать вознаграждение за блок, просто помогая защитить сеть.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
            id="panel">
            <AccordionSummary
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography id="panel-typography">
                Как с помощью Proof of Stake я могу
                получить PIV в качестве вознаграждения?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Как с помощью Proof of Stake я могу получить PIV в
                качестве вознаграждения? Это просто. Покупайте монеты
                PIV на бирже, перемещайте монеты на свой кошелек и держите их там,
                разблокировав свой кошелек для стекинга. Чем больше монет у вас в кошельке,
                тем больше вероятность, что вы получите вознаграждение.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </div>
     </div>
    </React.Fragment>
  );
}



