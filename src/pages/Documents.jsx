import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"
import { Col, Flex } from "antd"
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