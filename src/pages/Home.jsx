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
              <Title className="banner-title">
                Становитесь своим собственным банком
              </Title>
              <p className="banner-text">
                Получите свободу, благодаря конфиденциальным, глобальным
                цифровым деньгам. Становитесь своим собственным банком с полным
                контролем над своими цифровыми активами.
              </p>
            </Col>

            <div className="Home_header_img">
              <img src={planet} alt="error" />
              <img className="Home_header_img-bitcoin"
                src={bitcoin}
                alt="error"
              />
            </div>
          </Flex>
        </Container>
        <Container>

          <div>
            {CenterMode()}
          </div>
        </Container>
      </section>
      <section className="section__main-2">
        <Container>
          <Title
            className="Partners-title"
          >
            ПАРТНЕРЫ
          </Title>
          <Flex className="Partners">
            <Col className="Partmers_info">
              <Title className="Partmers_info-title">Нас поддерживают</Title>
              <p className="Partmers_info-text">
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

              <Flex className="Wallet_icons"              >
                <TfiAndroid className="icon" />
                <TfiApple className="icon" />
                <TfiLinux className="icon" />
                <RiWindowsFill className="icon" />
              </Flex>

              <Button
                className="Wallet-button"
              >
                <TfiApple className="icon2" />
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
          <Flex className="Steps">
            <div>
              <Title className="Steps__info-title">Готовы начать?</Title>
              <p className="Steps__info-text">
                Независимо от того, являетесь ли вы разработчиком, мерчантом,
                конечным пользователем или покупателем окон, мы приветствуем вас
                в сообществе BTCA.
              </p>
            </div>

          </Flex>
          <Flex className="Regiration">
            <Row className="Steps__Registration">
              <Col className="Registration__getting">
                <div className="Registration__getting-1">
                  <p className="Registration__getting-1-text">1 шаг</p>
                  <div className="Registration__getting-1-line"></div>
                </div>
                <Title
                  className="Registration__getting-title1">
                  Скачайте приложение
                </Title>
                <div className="Registration__getting-image">
                  <img
                    src={Steps1}
                    alt="error"
                    />
                </div>

                <Button className="Registration__getting-button">
                  <Link>Перейти</Link>
                </Button>
              </Col>
              <Col className="Registration__getting">
                <div className="Registration__getting-1">
                  <p className="Registration__getting-1-text">2 шаг</p>
                  <div className="Registration__getting-1-line"></div>
                </div>
                <Title
                  className="Registration__getting-title1">
                  Регестрируйтесь
                </Title>
                <div className="Registration__getting-image">
                  <img
                    src={Steps2}
                    alt="error"
                  />
                </div>

                <Button className="Registration__getting-button2">
                  <Link>Перейти</Link>
                </Button>
              </Col>
              <Col className="Registration__getting">
                <div className="Registration__getting-1">
                  <p className="Registration__getting-1-text">3 шаг</p>
                  <div className="Registration__getting-1-line"></div>
                </div>
                <Title
                  className="Registration__getting-title1">
                  Пользуйтесь
                </Title>
                <div className="Registration__getting-image">
                  <img
                    src={Steps3}
                    alt="error"
                  />
                </div>
                <Button className="Registration__getting-button2">
                  <Link>Перейти</Link>
                </Button>
              </Col>
            </Row>
          </Flex>
          <Flex className="Block-area">
            <Col className="Block-main">
              <Title className="Block-area-title">
                Никогда не пропускайте обновления
              </Title>
              <p className="Block-area-text">
                Подпишитесь на информационный бюллетень и будьте первым, кто
                получит новейшие оповещения, объявления и обновления о
                разработках BTCA.
              </p>
              <Flex className="Block-area-2">
                <Input  className="Block-area-2-input"
                  placeholder={"Ваш e-mail"}
                  ></Input>
                <div className="">
                <Button
                  className="Block-area-2-button"
                 >
                  <Link to="/subscribe">Подписаться</Link>
                </Button>
                </div>
              </Flex>
            </Col>
          </Flex>
        </Container>
      </section>
    </Fragment>


  );
};

export default Home;
