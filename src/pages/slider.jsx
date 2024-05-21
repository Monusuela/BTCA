import React, { Component } from "react";
import Slider from "react-slick";
import arrow from "../images/arrow.png";
import world from "../images/world.png";
import gears from "../images/gears.png";
import { Button, Carousel, Col, Flex } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

function CenterMode() {
  // const settings = {
  //   className: "center",
  //   centerMode: false ,
  //   infinite: false,
  //   centerPadding: "60px",
  //   slidesToShow: 1,
  //   speed: 500
  // };
  return (
    <div className="slider-container">
      {/* <Slider {...settings}> */}
      <Carousel autoplay className="Carousel">
        {/* <div className="slick-trake" style={{ width: "1200px", height: "602px" }} > */}
          <Flex className="info"  >
          <div >
            <Col className="info__item">
              <div>
                <p className="info__item-text2" >Защитите свои активы с помощью</p>
                <Title className="info__item-title">
                  Секретных транзакций
                </Title>
                <p className="info__item-text">
                  An improbable, overnight rise has established a new token
                  as a blockchain gaming heavyweight.
                </p>
                <Button className="info__item-button" >
                  <Link> Перейти и получить</Link>
                </Button>
              </div>
              <div>
                <img src={world} alt="error" className="info__item-world" />
              </div>
            </Col>
          </div>
          </Flex>
          <Flex>
          <div>
            <Col className="info__item">
              <div>
                <p className="info__item-text2">Помогите зашитить сеть</p>
                <Title className="info__item-title">
                  И получите вознаграждение
                </Title>
                <p className="info__item-text">
                  An improbable, overnight rise has established a new token
                  as a blockchain gaming heavyweight.
                </p>
                <Button className="info__item-button">
                  <Link> Перейти и получить</Link>
                </Button>
              </div>
              <div>
                <img src={arrow} alt="error" className="info__item-arrow" />
              </div>

            </Col>
          </div>
          </Flex>
          <Flex>
          <div>
            <Col className="info__item">
              <div>
                <p className="info__item-text2">Быстро. Доступно. Безопасно</p>
                <Title className="info__item-title">
                  Глобальные транзакции
                </Title>
                <p className="info__item-text">
                  An improbable, overnight rise has established a new token
                  as a blockchain gaming heavyweight.
                </p>
                <Button className="info__item-button">
                  <Link> Перейти и получить</Link>
                </Button>
              </div>
              <div>
                <img src={gears} alt="error" className="info__item-gears"  />
              </div>

            </Col>
          </div>
          </Flex>

      </Carousel>
     </div>
       /* </Slider> */ 
     
              )
}

export default CenterMode;

