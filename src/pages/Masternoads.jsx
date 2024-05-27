import { Fragment } from "react"
import Container from "../components/container"
import { Col, Flex, Row } from "antd"
import ControlledAccordions from "../components/Category"
import { BsArrowRightSquareFill } from "react-icons/bs"
import Subscribe from "../modules/subscribe"
import { Link } from "react-router-dom"
import Frame from "../images/Frame.png"
import elips from "../images/Ellipse 30.png"
import frame2 from "../images/Frame 120.png"
import display from "../images/display.png"
import protect from "../images/protect.png"
import networkTree from "../images/network-tree.png"
import fr1 from "../images/fr1.png"
import fr2 from "../images/fr2.png"
import fr3 from "../images/fr3.png"

const Masternoads = () => {
  return (
    <Fragment>
      <section className="section__main-1">
        <Container className={"container__left"}>
          <Flex className="banner" style={{ color: "#fff" }}>
            <Col span={11} className="banner">
              <h1 className="banner-title">
                Мастерноды
              </h1>
              <p className="banner-text">
                Получайте больше вознаграждений за хостинг и предоставление услуг второго уровня сети BTCA.
              </p>
            </Col>

            <div className="Home_header_img">
              <img
                src={frame2}
                alt="error" />
              <img className="Home_header_img-bitcoin"
                src={elips}
                alt="error"
              />
            </div>
          </Flex>
        </Container>
        <Container className={"container-2"}>
          
          <Flex className="Steps3">
            <div>
              <h1 className="Steps3__info-title">Получайте Вознаграждения</h1>
              <p className="Steps3__info-text">
              Мастерноды BTCA предоставляют дополнительные узлы для проверки блоков 
              и транзакций, повышая безопасность распределенной сети.
              </p>
            </div>

          </Flex>

          <Flex className="Regiration3">
            <Row className="Steps__Registration2">
              <Col className="Registration__getting3">
                <div className="Registration__getting-img2"
                >
                  <img
                    src={networkTree}
                    alt="error"
                  />
                </div>
                <h1 className="Registration__getting-title1">
                Децентрализованное управление
                </h1>
                <p className="Registration__getting-1-text">
                Без установленных протоколов принятия решений прогресс, развитие и рост могут остановиться.
                </p>
              </Col>
              <Col className="Registration__getting4">
                <div className="Registration__getting-img2">
                  <img
                    src={protect}
                    alt="error"
                  />
                </div>
                <h1 className="Registration__getting-title1">
                Защита сети BTCA
                </h1>
                <p className="Registration__getting-1-text">
                Мастерноды BTCA обеспечивают 2-й уровень безопасности сети, 
                предоставляя дополнительные узлы для проверки блоков и транзакций. </p>
              </Col>
              <Col className="Registration__getting3">
                <div className="Registration__getting-img2">
                  <img
                    src={display}
                    alt="error"
                  />
                </div>
                <h1 className="Registration__getting-title1">
                Инновации второго уровня
                </h1>
                <p className="Registration__getting-1-text">
                BTCA использует второй уровень мастернод в качестве системы голосования на основе 
                  блокчейна, чтобы гарантировать принятие решений и распределение средств из бюджета.
                </p>
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

        <Flex className="Steps">
            <div>
              <h1 className="Steps__info-title">Требования</h1>
              
            </div>

          </Flex>
          <Flex className="Steps2">
            <Row className="Steps2__Registrations" >

              <Col className="Registrations__getting">

              <div className="Registration__getting-img2">
                  <img
                    src={fr1}
                    alt="error"
                  />
                </div>

                <h1 className="Registration__getting-title2">
                10 000 PIV за ноду
                </h1>

              </Col>
              <Col className="Registrations__getting">
              <div className="Registration__getting-img2">
                  <img
                    src={fr2}
                    alt="error"
                  />
                </div>

                <h1 className="Registration__getting-title2">
                Выделенный IP
                </h1>
                

              </Col>
              <Col className="Registrations__getting">
              <div className="Registration__getting-img2">
                  <img
                    src={fr3}
                    alt="error"
                  />
                </div>

                <h1 className="Registration__getting-title3">
                24 часа безотказной работы VPS
                </h1>
                

              </Col>
            </Row>
          </Flex>

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
                  Мастернода
                </h1>
                <p className="Registrations__getting-text">Руководство по настройке мастерноды</p>
                <Link className="Registrations__getting-link">Перейти <BsArrowRightSquareFill className="Registrations__getting-link-icon" /></Link>

              </Col>
              <Col className="Registrations__getting">

                <h1 className="Registrations__getting-title2">
                  Хостинг мастерноды
                </h1>
                <p className="Registrations__getting-text">Как настроить хостинг мастерноды PIVX, если вы используете Linux CLI</p>
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

export default Masternoads