import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { MdFiberManualRecord } from 'react-icons/md';
import Title from 'antd/es/typography/Title';
import { Col } from 'antd';
import Container from './container';


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ width: "1750px", padding: "60px 300px", display: "flex" }}>
      <Container className={"container__left"}>
        <Col style={{ width: "500px"}}>
        <Title style={{
          fontSize: "42px",
          color: "white"
          // background: "-webkit-linear-gradient(top left, #fff, rgba(60, 61, 61, 0.606))",
          // webkitBa: "text",
          // -webkit-text-fill-color: "transparent",
        }}>Часто задаваемые Вопросы</Title>
        <p style={{color: "grey", paddingTop: "30px", paddingBottom: "15px"}}>Категории</p>
        <ul className={`list-none Footer__winget-list`} style={{fontSize: "16px", color: "white", width: "365px" }}>
          <li style={{background: "#151822",  height: "60px", borderRadius: "8px",
            paddingLeft: "20px", paddingTop: "20px"
          }}>Финансы</li>
          <li style={{height: "60px", borderRadius: "8px",
            paddingLeft: "20px", paddingTop: "20px"
          }}>Начало</li>
          <li style={{height: "60px", borderRadius: "8px",
            paddingLeft: "20px", paddingTop: "20px"
          }}>Лицензии</li>
          <li style={{height: "60px", borderRadius: "8px",
            paddingLeft: "20px", paddingTop: "20px"
          }}>Лицензии</li>
        </ul>
      </Col>
      </Container>
      <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
        style={{ background: "#0D111B", color: "white"}}>
        {/* <div className=""> */}
          <AccordionSummary
            // expandIcon={<MdFiberManualRecord style={{ color: "white"}} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ flexShrink: 0 }} style={{color: "#279D88"}}>
            Что такое Proof of Stake?
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
        {/* </div> */}
        {/* <div className="">  */}
          <AccordionDetails>
            <Typography>
            Аббревиатура POS расшифровывается как point of sale, 
            что в переводе с английского означает «торговая точка». 
            POS-кредит — это разновидность экспресс-займа, который можно 
            получить без визита в банк, прямо в торговой точке: магазине, 
            гипермаркете, салоне продаж.
            </Typography>
          </AccordionDetails>
        {/* </div> */}
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
        style={{ background: "#0D111B", color: "white"}}>
        <AccordionSummary
          // expandIcon={<MdFiberManualRecord style={{ color: "white" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{flexShrink: 0 }} style={{color: "#279D88"}}>
            В чем преимущества PoS перед PoW?</Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
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
        style={{ background: "#0D111B", color: "white"}}>
        <AccordionSummary
          // expandIcon={<MdFiberManualRecord style={{ color: "white" }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{flexShrink: 0 }} style={{color: "#279D88"}}>
          Что такое стекинг?
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
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
        style={{ background: "#0D111B", color: "white"}}>
        <AccordionSummary
          // expandIcon={<MdFiberManualRecord style={{ color: "white" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{flexShrink: 0 }} style={{color: "#279D88"}}
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
        style={{ background: "#0D111B", color: "white"}}>
        <AccordionSummary
          // expandIcon={<MdFiberManualRecord style={{ color: "white" }} />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ flexShrink: 0 }} style={{color: "#279D88"}}>
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
    </div>
  );
}



