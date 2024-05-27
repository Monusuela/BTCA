import { Fragment } from "react"
import Container from "../components/container"
import { Col, Flex, Row } from "antd"
import ControlledAccordions from "../components/Category"
import { BsArrowRightSquareFill } from "react-icons/bs"
import Subscribe from "../modules/subscribe"
import { Link } from "react-router-dom"
import staked from "../modules/staked"
import Frame from "../images/Frame.png"
import coin from "../images/coin.png"
import Group1 from "../images/Group 15.png"
import Group2 from "../images/Group 16.png"
import Group3 from "../images/Group 17.png"

const ColdStaking = () => {
  return (
    <Fragment>
      <section className="section__main-5">
        <Container className={"container__left"}>
          <Flex className="banner-2" style={{ color: "#fff" }}>
            <Col span={11} className="banner-2">
              <h1 className="banner-2-title">
                Cold Staking
              </h1>
              <p className="banner-2-text">
                Receive staking rewards while your funds are securely locked in offline cold storage.
              </p>
            </Col>

            <div className="Home_header_img">

              <img
                src={coin}
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
              <h1 className="Steps2__info-title">Стекинг ваших PIVX
                Еще не был настолько простым</h1>
              <p className="Steps2__info-text">
              Делегируйте BTCA для стекинга на горячий кошелек, сохраняя при этом полный контроль. 
              С холодным стекингом вы сохраняете закрытые ключи от своих BTCA и вознаграждения за стекинг 
              в оффлайн-режиме, в то время, как горячий кошелек остается в сети для стекинга от вашего имени
              </p>
            </div>

          </Flex>

          <Flex className="Regiration3">
            <Row className="Steps__Registration2">
              <Col className="Registration__getting3">
                <div className="Registration__getting-img">
                  <img
                    src={Group1}
                    alt="error"
                  />
                </div>
                <h1 className="Registration__getting-title2">
                  Активное автономное решение
                </h1>
                <p className="Registration__getting-1-text3">
                  После делегирования ваш холодный кошелек и закрытые ключи для использования
                  BTCA не обязаны оставаться в сети до тех пор, пока вы не решите их потратить.
                </p>
              </Col>
              <Col className="Registration__getting3">
                <div className="Registration__getting-img">
                  <img
                    src={Group2}
                    alt="error"
                  />
                </div>
                <h1 className="Registration__getting-title2">
                  Минимальные требования к оборудованию
                </h1>
                <p className="Registration__getting-1-text3">
                  Большинство настольных компьютеров, ноутбуков соответствуют требованиям,
                  необходимым для запуска горячего кошелька для холодного стекинга </p>
              </Col>
              <Col className="Registration__getting3">
                <div className="Registration__getting-img">
                  <img
                    src={Group3}
                    alt="error"
                  />
                </div>
                <h1 className="Registration__getting-title2">
                  Экономия Энергии
                </h1>
                <p className="Registration__getting-1-text3">
                  Несколько холодных кошельков могут делегировать BTCA одному горячему кошельку,
                  уменьшая потребление энергии, необходимое для стекинга нескольких небольших балансов кошелька
                </p>
              </Col>

            </Row>
          </Flex>


          <Flex className="frame-img">
            <img src={Frame} alt="error" />
          </Flex>
        </Container>





      </section>
      <section className="section__main-6">
        <Container>
          <Flex>
            <div>
              <div>
                {staked()}
              </div>
            </div>

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
                  Холодный стекинг
                </h1>
                <p className="Registrations__getting-text">Как настроить холодный стекинг</p>
                <Link className="Registrations__getting-link">Перейти <BsArrowRightSquareFill className="Registrations__getting-link-icon" /></Link>

              </Col>
              <Col className="Registrations__getting">

                <h1 className="Registrations__getting-title2">
                  Холодный стекинг на Ledger
                </h1>
                <p className="Registrations__getting-text">Как настроить холодный стекинг с аппаратным кошельком Ledger</p>
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

export default ColdStaking