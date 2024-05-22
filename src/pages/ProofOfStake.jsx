import { Fragment } from "react"
import Container from "../components/container"
import { Button, Col, Flex, Input, Row } from "antd"
import Title from "antd/es/skeleton/Title"
import { Link } from "react-router-dom"
import chips from "../images/chips.png"
import Icon1 from "../images/ikon/Frame 118.png"
import Icon2 from "../images/ikon/Frame 117.png"
import Icon3 from "../images/ikon/Frame 116.png"
import Icon4 from "../images/ikon/Frame 115.png"
import Frame from "../images/Frame.png"
import ControlledAccordions from "../components/Category"
import { BsArrowRightSquareFill } from "react-icons/bs"

const ProofOfStake = () => {
  return (
    <Fragment>

      <section className="section__main-5">
        <Container className={"container__left"}>
          <Flex className="banner-2" style={{ color: "#fff" }}>
            <Col span={11} className="banner-2">
              <h1 className="banner-2-title">
                Proof of Stake
              </h1>
              <p className="banner-2-text">
                Получайте вознаграждения за безопасность сети BTCA,
                просто храня монеты в своем кошельке.
              </p>
            </Col>

            <div className="Home_header_img2">

              <img
                src={chips}
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

            </Flex>

          </Flex>


          <Flex className="frame-img">
            <img src={Frame} alt="error" />
          </Flex>
        </Container>





      </section>
      <section className="section__main-6">

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
                  BTCA Proof of Stake
                </h1>
                <p className="Registrations__getting-text">Введение в BTCA Proof of Stake</p>
                <Link className="Registrations__getting-link">Перейти <BsArrowRightSquareFill  className="Registrations__getting-link-icon"/></Link>

              </Col>
              <Col className="Registrations__getting">

                <h1 className="Registrations__getting-title">
                  Требования к стекингу
                </h1>
                <p className="Registrations__getting-text">Что вам необходимо для стекинга</p>
                <Link className="Registrations__getting-link">Перейти <BsArrowRightSquareFill className="Registrations__getting-link-icon"/></Link>

              </Col>
              <Col className="Registrations__getting">

                <h1 className="Registrations__getting-title">
                  Требования стекинга
                </h1>
                <p className="Registrations__getting-text">Как запустить стекинг</p>
                <Link className="Registrations__getting-link">Перейти <BsArrowRightSquareFill className="Registrations__getting-link-icon"/></Link>

              </Col>
            </Row>
          </Flex>

          <div className="">
            <div className="">
              {ControlledAccordions()}
            </div>
          </div>

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
                <Input className="Block-area-2-input"
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
  )
}

export default ProofOfStake;