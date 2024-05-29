import { Fragment } from "react"
import Container from "../components/container"
import { Col, Flex, Row } from "antd"
import ControlledAccordions from "../components/Category"
import { BsArrowRightSquareFill } from "react-icons/bs"
import Subscribe from "../modules/subscribe"
import { Link } from "react-router-dom"
import Frame from "../images/Frame.png"
import merchant from "../images/merchant.png"

const Merchant = () => {
  return (
    <Fragment>
      <section className="section__main-5">
        <Container className={"container__left"}>
          <Flex className="banner-2" style={{ color: "#fff" }}>
            <Col span={11} className="banner-2">
              <h1 className="banner-2-title">
                Мерчант
              </h1>
              <p className="banner-2-text">
                Идите в ногу с новейшими технологиями и начните получать
                новые источники дохода от глобального сообщества пользователей BTCA
              </p>
            </Col>

            <div className="Home_header_img2">

              <img
                src={merchant}
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
            <Flex className="case-block" >
              <Row className="case_row">
                <Col className="case_row-col1">
                  <h1 className="case_row-col1-title" >
                    Просто, Быстро и Безопасно</h1>
                  <p className="case_row-col1-text" >
                  Рассматриваете альтернативные способы оплаты устаревшим? 
                  Вот 4 причины, по которым BTCA - лучший альтернативный способ приема платежей.
                    </p>
                </Col>
                <Col className="case_row-col2">
                  <div className="case_row-col2-content">
                    <h1 className="case_row-col2-content-title">
                    Решения с открытым исходным кодом
                      </h1>
                    <img
                      // src={} 
                      alt="error" />
                  </div>
                  <p className="case_row-col2-text">
                  Интегрируйте методы оплаты, разработанные  BTCA, легко и совершенно бесплатно, 
                  потому что код  BTCA полностью открыт любому пользователю. осуществления транзакции.кошелька
                    </p>
                </Col>
                <Flex  className="case_row-cols">
                <Col className="case_row-cols-col3">
                  <div className="content">
                    <h1>Низкие затраты на платежи</h1>
                    <img
                      // src={} 
                      alt="error" />
                  </div>

                  <p className="cols-text">Комиссия за транзакцию мизерна и чаще всего ниже 0,01 доллара США.</p>
                </Col>
                <Col className="case_row-cols-col4">
                  <div className="content">
                    <h1>Мгновенные платежи</h1>
                    <img
                      // src={} 
                      alt="error" />
                  </div>

                  <p className="cols-text">Благодаря сети BTCA получайте мгновенные платежи (в течение одной минуты).</p>
                </Col>
                </Flex>
              </Row>
            </Flex>


          </Flex>


          <Flex className="frame-img">
            <img src={Frame} alt="error" />
          </Flex>
        </Container>





      </section>
      <section className="section__main-7">
        <Container>
          <Flex className="Steps">
            <div>
              <h1 className="Steps__info-title">Документация</h1>
              <p className="Steps__info-text">
                Ищете более подробную информацию или инструкции? Нет проблем. Мы об этом позаботились.
              </p>
            </div>

          </Flex>
          <Flex className="Steps2">
            <Row className="Steps2__Registrations" >

              <Col className="Registrations__getting">

                <h1 className="Registrations__getting-title">
                  Android
                </h1>
                <p className="Registrations__getting-text">Как принимать PIVX с помощью Android</p>
                <Link className="Registrations__getting-link">Перейти <BsArrowRightSquareFill className="Registrations__getting-link-icon" /></Link>

              </Col>
              <Col className="Registrations__getting">

                <h1 className="Registrations__getting-title2">
                  QT-кошелек
                </h1>
                <p className="Registrations__getting-text">Видеоруководства по QT-кошельку</p>
                <Link className="Registrations__getting-link">Перейти <BsArrowRightSquareFill className="Registrations__getting-link-icon" /></Link>

              </Col>
            </Row>
          </Flex>

          <div>
            <div>
              {ControlledAccordions()}
            </div>
          </div>

          <div>
            {Subscribe()}
          </div>
        </Container>
      </section>
    </Fragment>
  )
}

export default Merchant