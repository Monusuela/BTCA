import { Fragment } from "react";
import Container from "../components/container";
import { Col, Flex } from "antd";
import Title from "antd/es/typography/Title";
import planet from "../images/planet.png";
import bitcoin from "../images/bitcoin.png";

const Home = () => {
  return (
    <Fragment>
      <section className="section__main-1">
 
        <Container className={"container__left"}>
          <Flex
            className="banner"
            style={{ color: "#fff" }}
          >
            <Col span={11} className="banner" >
              <Title className="banner-title" style={{width: "595px"}}>Становитесь своим собственным банком</Title>
              <p style={{width: "550px", fontSize: "18px"}}>Получите свободу, благодаря конфиденциальным, глобальным цифровым деньгам. Становитесь своим собственным банком с полным контролем над своими цифровыми активами.</p>
            </Col>

            <div className="Home_header_img">
            <img src={planet} alt="error" />
                <img src={bitcoin} alt="error" style={{display: "flex", alignItems: "center", position: "absolute", top: "300px"}}/>
            </div>
          </Flex>
        </Container>
      </section>
    </Fragment>
  );
};

export default Home;
