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
          <Flex className="case">


            {/* <Flex className="case-block" >
              <Row className="case_row">
                <Col className="case_row-col1">
                  <h1 className="case_row-col1-title" >Получить больше Владея малым</h1>
                  <p  className="case_row-col1-text" >Независимо от того, являетесь ли вы разработчиком,
                    мерчантом, конечным пользователем или покупателем окон,
                    мы приветствуем вас в сообществе BTCA.</p>
                </Col>
                <Col className="case_row-col2">
                  <div className="case_row-col2-content">
                    <h1 className="case_row-col2-content-title">Согласованное Время Блока</h1>
                    <img src={Icon1} alt="error" />
                  </div>
                  <p className="case_row-col2-text">Фиксированный интервал между блоками составляет
                    60 секунд. Протокол времени 2-ой версии значительно
                    сокращает разброс фактического интервала между блоками.</p>
                </Col>
                <Flex  className="case_row-cols">
                  <Col className="case_row-cols-col3">
                    <div  className="content">
                      <h1>Безопасная Сеть</h1>
                      <img src={Icon2} alt="error" />
                    </div>

                    <p className="cols-text">Распределенная сеть отдельных узлов обеспечивает проверку каждой
                      транзакции и блока, добавляемого в блокчейн, гарантируя, что блоки
                      и транзакции действительны.</p>
                  </Col>
                  <Col  className="case_row-cols-col4">
                    <div className="content">
                      <h1>Меньшее потребление энергии</h1>
                      <img src={Icon3} alt="error" />
                    </div>

                    <p className="cols-text">Фиксированный интервал между блоками составляет 60 секунд.
                      Протокол времени 2-ой версии значительно сокращает разброс
                      фактического интервала между блоками.</p>
                  </Col>
                  <Col className="case_row-cols-col5">
                    <div className="content">
                      <h1>Честный Стекинг</h1>
                      <img src={Icon4} alt="error" />
                    </div>

                    <p className="cols-text">У каждого UTXO есть шанс выиграть ставку
                      с линейным снижением сложности в зависимости от ценности UTXO. </p>
                  </Col>
                </Flex>
              </Row>

            </Flex> */}

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