import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"
import { Button, Col, Flex, Row } from "antd"
import Frame from "../images/Frame.png"
import btca from "../images/btca.png"

const Documents = () => {
  return (
    <Fragment>
      <section className="section__main-5">
        <Container className={"container__left4"}>
          <Flex className="banner-2" style={{ color: "#fff" }}>
            <Col span={11} className="banner-2">
              <h1 className="banner-2-title">
                BTCA
              </h1>
              <p className="banner-2-text">
                Здесь подробно описаны некоторые академические документы о BTCA,
                его денежно-кредитной политике и многом другом.
              </p>
            </Col>

            <div className="Home_header_img2">

              <img
                src={btca}
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
          <Flex className="Steps2">
            <div>
              <h1 className="Steps2__info-title">Whitepaper</h1>
              <p className="Steps2__info-text">
              Прочтите (в нетехнической манере) самую свежую информацию о BTCA. Официальный академический технический 
              документ, который должен быть выпущен основными разработчиками, когда позволит время.
              </p>
            </div>

          </Flex>

          <Flex className="Regiration3">
            <Row className="Steps__Registration2">
              <Col className="Registration__getting3">

                <h1 className="Registration__getting-title2">
                  Активное автономное решение
                </h1>
                <p className="Registration__getting-1-text3">
                  После делегирования ваш холодный кошелек и закрытые ключи для использования
                  BTCA не обязаны оставаться в сети до тех пор, пока вы не решите их потратить.
                </p>
                <div>
                    <Button>
                    <img
                    // src={}
                    alt="error"
                    />
                    Скачать PDF
                    </Button>
                  </div>
              </Col>
              <Col className="Registration__getting3">

                <h1 className="Registration__getting-title2">
                  Минимальные требования к оборудованию
                </h1>
                <p className="Registration__getting-1-text3">
                  Большинство настольных компьютеров, ноутбуков соответствуют требованиям,
                  необходимым для запуска горячего кошелька для холодного стекинга </p>

                  <div>
                    <Button>
                    <img
                    // src={}
                    alt="error"
                    />
                      Скачать PDF
                    </Button>
                  </div>
              </Col>
              <Col className="Registration__getting3">

                <h1 className="Registration__getting-title2">
                  Экономия Энергии
                </h1>
                <p className="Registration__getting-1-text3">
                  Несколько холодных кошельков могут делегировать BTCA одному горячему кошельку,
                  уменьшая потребление энергии, необходимое для стекинга нескольких небольших балансов кошелька
                </p>
                <div>
                    <Button>
                    <img
                    // src={}
                    alt="error"
                    />
                      Просмотреть карту развития
                      </Button>
                  </div>
              </Col>

            </Row>
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

export default Documents