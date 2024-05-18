import React, { Component } from "react";
import Slider from "react-slick";
import arrow from "../images/arrow.png";
import world from "../images/world.png";
import gears from "../images/gears.png";
import { Button,  Col, Flex } from "antd";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: false ,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };
  return (
    <div className="slider-container">
       <Slider {...settings} style={{ width: "1200px", height: "602px"}}>
    {/* <Carousel autoplay style={{display: "flex", paddingLeft: "800px"}}> */}
           <div className="slick-trake" >
           <Flex className="info"  >
            <div>
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
             </Col></div>
             <div>
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
               
             </Col></div>
             <div>
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
             </div>
             </Flex>
           {/* </Carousel> */}
           </div>
       </Slider>
     </div>
  );
}

export default CenterMode;