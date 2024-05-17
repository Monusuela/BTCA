import { Fragment } from "react";
import Container from "../components/container";
import { Button, Row, Col, Flex, Input, Carousel } from "antd";
import { TfiAndroid, TfiApple, TfiLinux } from "react-icons/tfi";
import { RiWindowsFill } from "react-icons/ri";
import Title from "antd/es/typography/Title";
import planet from "../images/planet.png";
import bitcoin from "../images/bitcoin.png";
import arrow from "../images/arrow.png";
import world from "../images/world.png";
import gears from "../images/gears.png";
import google from "../images/icon/Google.png";
import yahoo from "../images/icon/Yahoo.png";
import wecar from "../images/icon/WeCar.png";
import nasdaq from "../images/icon/Nasdaq.png";
import grop1 from "../images/icon/Group 1.png";
import w from "../images/icon/w.png";
import ambev from "../images/icon/Ambev.png";
import ods from "../images/icon/ods.png";
import yandex from "../images/icon/yandex.png";
import Swap from "../images/Swap.svg";
import Macbook from "../images/Device - Macbook Pro.png";
import Steps1 from "../images/Steps/Steps1.png";
import Steps2 from "../images/Steps/Steps2.png";
import Steps3 from "../images/Steps/Steps3.png";
import { Link } from "react-router-dom";
import CenterMode from "./slider";



// function CenterMode() {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500
//   };

//   return(
    
//   )

// }

const Home = () => {
  return (
    <Fragment>
      <section className="section__main-1">
        <Container className={"container__left"}>
          <Flex className="banner" style={{ color: "#fff" }}>
            <Col span={11} className="banner">
              <Title className="banner-title" style={{ width: "595px" }}>
                Становитесь своим собственным банком
              </Title>
              <p style={{ width: "550px", fontSize: "18px" }}>
                Получите свободу, благодаря конфиденциальным, глобальным
                цифровым деньгам. Становитесь своим собственным банком с полным
                контролем над своими цифровыми активами.
              </p>
            </Col>

            <div className="Home_header_img">
              <img src={planet} alt="error" />
              <img
                src={bitcoin}
                alt="error"
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "absolute",
                  top: "300px",
                }}
              />
            </div>
          </Flex>
        </Container>
        <Container>
          {/* <Carousel autoplay style={{display: "flex", paddingLeft: "800px"}}>
           
              <Flex className="info" style={{display: "flex"}} >
                <Col className="info__item">
                  <div>
                    <p style={{fontSize: "16px"}}>Защитите свои активы с помощью</p>
                    <Title className="info__item-title">
                      Секретных транзакций
                    </Title>
                    <p className="info__item-text">
                      An improbable, overnight rise has established a new token
                      as a blockchain gaming heavyweight.
                    </p>
                    <Button style={{zIndex: "1", marginTop: "15px", 
                  width: "550px",
                  fontSize: "18px",
                  borderRadius: "12px",
                  padding: "12px 32px",
                  width: "224px",
                  height: "54px",
                  background: "#1D9A6D"
                }}>
                      <Link> Перейти и получить</Link>
                    </Button>
                  </div>
                 <div>
                 <img src={world} alt="error" style={{marginLeft: "115px", bottom: "0px" , position: "absolute", borderRadius: "8px"}}/>
                 </div>
                </Col>
              </Flex>
           
              <Flex className="info">
                <Col className="info__item">
                  <div>
                    <p style={{fontSize: "16px"}}>Помогите зашитить сеть</p>
                    <Title className="info__item-title">
                      И получите вознаграждение
                    </Title>
                    <p className="info__item-text">
                      An improbable, overnight rise has established a new token
                      as a blockchain gaming heavyweight.
                    </p>
                    <Button style={{zIndex: "1", marginTop: "15px", 
                  width: "550px",
                  fontSize: "18px",
                  borderRadius: "12px",
                  padding: "12px 32px",
                  width: "224px",
                  height: "54px",
                  background: "#1D9A6D"
                }}>
                      <Link> Перейти и получить</Link>
                    </Button>
                  </div>
                  <div>
                  <img src={arrow} alt="error"  style={{marginLeft: "89px",  bottom: "0px" , position: "absolute", borderRadius: "8px"}}/>
                  </div>
                  
                </Col>
              </Flex>
              <Flex className="info">
                <Col className="info__item">
                  <div>
                    <p style={{fontSize: "16px"}}>Быстро. Доступно. Безопасно</p>
                    <Title className="info__item-title">
                      Глобальные транзакции
                    </Title>
                    <p className="info__item-text">
                      An improbable, overnight rise has established a new token
                      as a blockchain gaming heavyweight.
                    </p>
                    <Button style={{zIndex: "1", marginTop: "15px", 
                  width: "550px",
                  fontSize: "18px",
                  borderRadius: "12px",
                  padding: "12px 32px",
                  width: "224px",
                  height: "54px",
                  background: "#1D9A6D"
                }}>
                      <Link> Перейти и получить</Link>
                    </Button>
                  </div>
                  <div>
                  <img src={gears} alt="error"  style={{marginLeft: "45px", bottom: "0px" , position: "absolute", borderRadius: "8px"}}/>
                  </div>
                  
                </Col>
              </Flex>
              </Carousel> */}
              <div>
                {CenterMode()}
              </div>
        </Container>
      </section>
      <section className="section__main-2">
        <Container>
          <Title
            className="Partners-title"
            style={{ color: "#ffffff0e", fontSize: "200px", zIndex: "2" }}
          >
            ПАРТНЕРЫ
          </Title>
          <Flex className="Partners">
            <Col className="Partmers-info">
              <Title className="Partmers-info-title">Нас поддерживают</Title>
              <p style={{ fontSize: "18px", lineHeight: "170%" }}>
                Получите свободу, благодаря конфиденциальным, глобальным
                цифровым деньгам. Становитесь своим собственным банком с полным
                контролем над своими цифровыми активами.
              </p>

              <div className="Swap">
                <Button className="Swap-button">TIPS</Button>
                <p className="Swap-text">Swap to see more</p>
                <div className="Swap-image">
                  <img src={Swap} alt="error" />
                </div>
              </div>
            </Col>
            <div className="Partners-icon">
              <Flex className="wecar">
                <img src={wecar} alt="error" />
              </Flex>
              <Flex className="google">
                <img src={google} alt="error" />
              </Flex>
              <Flex className="yahoo">
                <img src={yahoo} alt="error" className="yahoo" />
              </Flex>
              <Flex className="w">
                <img src={w} alt="error" />
              </Flex>
              <Flex className="nasdaq">
                <img src={nasdaq} alt="error" />
              </Flex>
              <Flex className="grop1">
                <img src={grop1} alt="error" />
              </Flex>
              <Flex className="ods">
                <img src={ods} alt="error" />
              </Flex>
              <Flex className="yandex">
                <img src={yandex} alt="error" />
              </Flex>
              <Flex className="ambev">
                <img src={ambev} alt="error" />
              </Flex>
            </div>
          </Flex>
        </Container>
      </section>
      <section className="section__main-3">
        <Container className={"container__left2"}>
          <Flex className="Wallet">
            <Col span={11} className="Wallet">
              <Title className="Wallet-title">Кошелек и Инструменты</Title>
              <p className="Wallet-text">
                BTCA предоставляет вам инструменты и ресурсы, чтобы вы всегда
                могли контролировать свои средства.
              </p>

              <Flex
                style={{
                  gap: "20px",
                  paddingTop: "25px",
                  paddingBottom: "25px",
                }}
              >
                <TfiAndroid
                  style={{ color: "#636D85", transform: "scale(1.8)" }}
                />
                <TfiApple
                  style={{ color: "#636D85", transform: "scale(1.8)" }}
                />
                <TfiLinux
                  style={{ color: "#636D85", transform: "scale(1.8)" }}
                />
                <RiWindowsFill
                  style={{ color: "#636D85", transform: "scale(1.8)" }}
                />
              </Flex>

              <Button
                className="Wallet-button"
                style={{
                  marginTop: "15px",
                  color: "#8886FF",
                  background: "rgba(255, 255, 255, 0.064)",
                  border: "1px solid rgba(255, 255, 255, 0.064)",
                }}
              >
                <TfiApple
                  style={{
                    color: "#636D85",
                    transform: "scale(1.8)",
                    marginRight: "20px",
                  }}
                />
                Скачать кошелек
              </Button>
            </Col>

            <div className="Wallet-image">
              <img src={Macbook} alt="error" />
            </div>
          </Flex>
        </Container>
      </section>
      <section className="section__main-4">
        <Container>
          <Title className="Steps-title">Ready?</Title>
          <Flex className="Steps" justify="center">
            <div>
              <Title className="Steps__info-title">Готовы начать?</Title>
              <p className="Steps__info-text">
                Независимо от того, являетесь ли вы разработчиком, мерчантом,
                конечным пользователем или покупателем окон, мы приветствуем вас
                в сообществе BTCA.
              </p>
            </div>
            
          </Flex>
          <Flex style={{marginLeft: "250px"}}>
          <Row className="Steps__Registration">
              <Col className="Registration__getting">
                <div style={{display: "flex", alignItems: "center"}}>
                <p className="Registration__getting-text">1 шаг</p>
                <div style={{width: "330px" , borderBottom:"1px solid #ffffff9f", marginLeft: "15px" , paddingTop: "20px"}}></div>
                </div>
                <Title
                  className="Registration__getting-title"
                  style={{ color: "white" }}
                >
                  Скачайте приложение
                </Title>
                <div style={{ bottom: "0px", position: "absolute", right: "0px" }}>
                <img
                  src={Steps1}
                  alt="error"
                  className="Registration__getting-image"
                />
                </div>
                
                <Button className="Registration__getting-button">
                  <Link>Перейти</Link>
                </Button>
              </Col>
              <Col className="Registration__getting">
              <div style={{display: "flex", alignItems: "center"}}>
                <p className="Registration__getting-text">2 шаг</p>
                <div style={{width: "330px" ,borderBottom:"1px solid #ffffff9f",marginLeft: "15px", paddingTop: "20px"}}></div>
                </div>
                <Title
                  className="Registration__getting-title"
                  style={{ color: "white" }}
                >
                  Регестрируйтесь
                </Title>
                <div  style={{ bottom: "0px", position: "absolute", right: "0px" }}>
                <img
                  src={Steps2}
                  alt="error"
                  className="Registration__getting-image" 
                />
                </div>
                
                <Button className="Registration__getting-button" style={{top:"76px"}}>
                  <Link>Перейти</Link>
                </Button>
              </Col>
              <Col className="Registration__getting">
              <div style={{display: "flex", alignItems: "center"}}>
                <p className="Registration__getting-text">3 шаг</p>
                <div style={{width: "330px" ,borderBottom:"1px solid #ffffff9f",marginLeft: "15px", paddingTop: "20px"}}></div>
                </div>
                <Title
                  className="Registration__getting-title"
                  style={{ color: "white" }}
                >
                  Пользуйтесь
                </Title>
                <div style={{bottom: "0px", position: "absolute", right: "0px" }}>
                <img 
                  src={Steps3}
                  alt="error"
                  className="Registration__getting-image"
                />
                </div>
                <Button className="Registration__getting-button"  style={{top:"76px"}}>
                  <Link>Перейти</Link>
                </Button>
              </Col>
            </Row>
          </Flex>
          <Flex className="Block-area">
            <Col>
              <Title className="Block-area-title">
                Никогда не пропускайте обновления
              </Title>
              <p className="Block-area-text">
                Подпишитесь на информационный бюллетень и будьте первым, кто
                получит новейшие оповещения, объявления и обновления о
                разработках BTCA.
              </p>
              <Flex>
                <Input
                  placeholder={"Ваш e-mail"}
                  className="Footer__widgets-input"
                  style={{ width: "600px", height: "65px" }}
                />
                <Button
                  className="Footer__widgets-button"
                  style={{
                    width: "150px",
                    height: "50px",
                    marginLeft: "-160px",
                  }}
                >
                  <Link>Подписаться</Link>
                </Button>
              </Flex>
            </Col>
          </Flex>
        </Container>
      </section>
    </Fragment>

    
  );
};

export default Home;
