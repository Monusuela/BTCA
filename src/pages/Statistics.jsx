import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"
import { Button, Col, Flex, Row } from "antd"
import Frame from "../images/Frame.png"
import birj from "../images/birj.png"
import { Link } from "react-router-dom"

const Statistics = () => {
  return (
    <Fragment>
      <section className="section__main-5">
        <Container className={"container__left3"}>
          <Flex className="banner-2" style={{ color: "#fff" }}>
            <Col span={11} className="banner-2">
              <h1 className="banner-2-title">
                Бирж
              </h1>
              <p className="banner-2-text">
                BTCA  доступен на следующих биржах и сервисах
              </p>
            </Col>

            <div className="Home_header_img2">

              <img className="Home_header_img2-birj"
                src={birj}
                alt="error"
              />
            </div>
          </Flex>
        </Container>

        <Container className={"container-2"}>
          <div className="case-title">
            <h1>
              Increase
            </h1>
          </div>
          <Flex className="case">
            <Flex className="Regiration3">
              <Row className="Steps__Registration4">
                <Col className="Registration__getting5">
                  <div className="Registration__getting-img3">
                    <img
                      // src={}
                      alt="error"
                    />
                    <img
                      // src={}
                      alt="error"
                    />

                  </div>
                  <h1 className="Registration__getting-title2">
                  Binance
                  </h1>
                  
                  <p className="Registration__getting-1-text3">
                  Buy & sell Crypto in minutes. Powerful crypto trading platform for those who mean business.
                  </p>

                  <div>
                    <img className=""
                    // src={}
                    alt="error" 
                    />
                    <Link>Посетить</Link>
                  </div>


                </Col>
                <Col className="Registration__getting5">
                  <div className="Registration__getting-img3">
                    <img
                      // src={}
                      alt="error"
                    />
                    <img
                      // src={}
                      alt="error"
                    />

                  </div>
                  <h1 className="Registration__getting-title2">
                  CoinEx
                  </h1>
                  
                  <p className="Registration__getting-1-text3">
                  CoinEx supports multiple languages like Chinese, English, Japanese, 
                  Korean, Russian, etc. and are providing global trading services in over 100 countries/regions.
                  </p>

                  <div>
                    <img className=""
                    // src={}
                    alt="error" 
                    />
                    <Link>Посетить</Link>
                  </div>


                </Col>
                <Col className="Registration__getting5">
                  <div className="Registration__getting-img3">
                    <img
                      // src={}
                      alt="error"
                    />
                    <img
                      // src={}
                      alt="error"
                    />

                  </div>
                  <h1 className="Registration__getting-title2">
                  KuCoin
                  </h1>
                  
                  <p className="Registration__getting-1-text3">
                  KuCoin Instant Exchange is a one-click crypto exchange 
                  service co-developed by KuCoin and the top HFT firm in Wall Street.
                  </p>

                  <div>
                    <img className=""
                    // src={}
                    alt="error" 
                    />
                    <Link>Посетить</Link>
                  </div>


                </Col>
                <Col className="Registration__getting5">
                  <div className="Registration__getting-img3">
                    <img
                      // src={}
                      alt="error"
                    />
                    <img
                      // src={}
                      alt="error"
                    />

                  </div>
                  <h1 className="Registration__getting-title2">
                  Bittrex
                  </h1>
                  
                  <p className="Registration__getting-1-text3">
                  Bittrex Global is one of the most secure trading platforms in the world.
                  </p>

                  <div>
                    <img className=""
                    // src={}
                    alt="error" 
                    />
                    <Link>Посетить</Link>
                  </div>


                </Col>
                

              </Row>
            </Flex>
            <Flex>
              <div>
                <div>
                  <Button>ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ</Button>
                  <p>Обратите внимание, что перечисленные сторонние услуги не одобрены BTCA и 
                    предоставляются только в информационных целях. Пожалуйста, будьте осторожны 
                    при использовании любых сторонних сервисов, поскольку это находится вне нашего контроля.</p>
                </div>
              </div>
            </Flex>
            <Flex className="frame-img">
              <img src={Frame} alt="error" />
            </Flex>

          </Flex>


          <Flex className="frame-img">
            <img src={Frame} alt="error" />
          </Flex>
        </Container>





      </section>
      <section className="section__main-7">
        <Container>
          <div>
            {Subscribe()}
          </div>
        </Container>
      </section>
    </Fragment>
  )
}

export default Statistics