import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"
import ControlledAccordions from "../components/Category"
import { Col, Flex, Row } from "antd"
import Frame from "../images/Frame.png"
import shield1 from "../images/shield1.png"

const Shield = () => {
    return (
        <Fragment>
            <section className="section__main-5">
                <Container className={"container__left"}>
                    <Flex className="banner-2" style={{ color: "#fff" }}>
                        <Col span={11} className="banner-2">
                            <h1 className="banner-2-title">
                                Конфиденциальность Shield
                            </h1>
                            <p className="banner-2-text">
                                Первый в мире протокол конфиденциальности zk-SNARKs на блокчейне Proof of Stake.
                            </p>
                        </Col>

                        <div className="Home_header_img">
                            <img className="Home_header_img-bitcoin2"
                                src={shield1}
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
                                    <h1 className="case_row-col1-title" >Как только вы этого захотите</h1>
                                    <p className="case_row-col1-text" >Shield обеспечивает полную конфиденциальность
                                        ваших транзакций, сохранение невидимости деталей транзакции от отправителя к
                                        получателю, суммы транзакции и остатков, без времени на подготовку или
                                        разделенных балансов. Это достигается благодаря новой настройке протокола
                                        zk-SNARK Sapling  BTCA компанией Electric Coin Company. Ваш полный баланс
                                        доступен для конфиденциальных транзакций в любое время.</p>
                                </Col>

                                <Flex className="case_row-cols">
                                    <Col className="case_row-cols-col2">
                                        <div className="content">

                                            <img
                                                // src={} 
                                                alt="error" />
                                        </div>
                                        <h1>Транзакции с нулевым разглашением</h1>
                                        <p className="cols-text">Доказательство существования и действительности
                                            транзакции без раскрытия каких-либо подробностей транзакции.</p>
                                    </Col>
                                    <Col className="case_row-cols-col3">
                                        <div className="content">

                                            <img
                                                // src={} 
                                                alt="error" />
                                        </div>
                                        <h1>Удобство использования и простота</h1>
                                        <p className="cols-text">Никаких деноминаций. Нет разделенных балансов.
                                            Нет нужды ждать других пользователей. </p>
                                    </Col>
                                    <Col className="case_row-cols-col4">
                                        <div className="content">

                                            <img
                                                // src={} 
                                                alt="error" />
                                        </div>
                                        <h1>Практическая скорость транзакции</h1>
                                        <p className="cols-text">1/2 секунды для генерации, 1/100 секунды для верификации.</p>
                                    </Col>
                                    <Col className="case_row-cols-col5">
                                        <div className="content">

                                            <img
                                                // src={} 
                                                alt="error" />
                                        </div>
                                        <h1>Полная конфиденциальность там, где это важно</h1>
                                        <p className="cols-text">Скрытие данных отправителя и получателя,
                                            а также стоимости транзакции.</p>
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
                <Container className={"container__left"}>
                    <Flex className="banner" style={{ color: "#fff" }}>
                        <Col span={11} className="banner">
                            <h1 className="banner-title">
                                Конфиденциальность ваших Транзакций
                            </h1>
                            <p className="banner-text">
                                Выберите что именно и когда вы хотите опубликовать свой адрес и
                                любую информацию о транзакциях, а также раскрывать конкретные транзакции
                                и / или суммы доверенным третьим лицам с помощью специальных ключей просмотра.
                            </p>
                        </Col>

                        <div className="Home_header_img">
                            <img className="Home_header_img-bitcoin2"
                                // src={}
                                alt="error"
                            />
                        </div>
                    </Flex>
                </Container>
            </section>

            <section className="section__main-7">
                <Container>
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

export default Shield