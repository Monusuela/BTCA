import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"
import { Col, Flex, Row } from "antd"
import frame2 from "../images/Frame 120.png"
import why from "../images/why.png"

const Why = () => {
  return (
    <Fragment>
      <section className="section__main-5">
        <Container className={"container__left"}>
          <Flex className="banner-2" style={{ color: "#fff" }}>
            <Col span={11} className="banner-2">
              <h1 className="banner-2-title">
                Почему BTCA?
              </h1>
              <p className="banner-2-text">
                Почувствуйте разницу с криптовалютой BTCA.
              </p>
            </Col>

            <div className="Home_header_img">
              <img
                src={frame2}
                alt="error" />
              <img className="Home_header_img-bitcoin"
                src={why}
                alt="error"
              />
            </div>
          </Flex>
        </Container>
        <Container className={"container-2"}>
          <Flex className="case">
            <Flex className="case-block" >
              <Row className="case_row">
                <ul>
                  <li>
                  <Col className="case_row-col2">
                      <div className="case_row-col2-content">
                        <h1 className="case_row-col2-content-title">
                        Средство Сбережения с Вознаграждениями
                        </h1>
                        <img
                          // src={} 
                          alt="error" />
                      </div>
                      <p className="case_row-col2-text">
                      BTCA награждает всех, кто хранит BTC в своих кошельках. В обмен на помощь в 
                      защите сети путем хранения вашего кошелька в сети и онлайн, вы будете вознаграждены 
                      монетами BTC. Официальный основной кошелек BTCA похож на управление вашим личным 
                      банком с активной системой вознаграждений в зависимости от количества BTCA, находящихся внутри.
                      </p>
                    </Col>
                  </li>
                  <li>
                    <Col className="case_row-col2">
                      <div className="case_row-col2-content">
                        <h1 className="case_row-col2-content-title">
                        Устойчивая Экономика
                        </h1>
                        <img
                          // src={} 
                          alt="error" />
                      </div>
                      <p className="case_row-col2-text">
                      BTCA был разработан для обеспечения долгосрочного устойчивого баланса между инфляцией 
                      и дефляцией, чтобы максимизировать сеть, ценность и безопасность для поддержки 
                      масштабируемой, децентрализованной и отказоустойчивой инфраструктуры узлов.
                      </p>
                    </Col>
                  </li>
                  <li>
                    <Col className="case_row-col2">
                      <div className="case_row-col2-content">
                        <h1 className="case_row-col2-content-title">
                        Быстрые и Дешевые Транзакции
                        </h1>
                        <img
                          // src={} 
                          alt="error" />
                      </div>
                      <p className="case_row-col2-text">
                      Отправляйте и получайте средства с помощью BTCA менее чем за минуту за мизерную долю BTC.
                      </p>
                    </Col>
                  </li>
                  <li>
                    <Col className="case_row-col2">
                      <div className="case_row-col2-content">
                        <h1 className="case_row-col2-content-title">
                        Мастерноды и Вознаграждения
                        </h1>
                        <img
                          // src={} 
                          alt="error" />
                      </div>
                      <p className="case_row-col2-text">
                      Получайте вознаграждения за безопасность сети и предоставление услуг 2-го уровня, 
                      пока ваш залог надежно хранится в автономном режиме.
                      </p>
                    </Col>
                  </li>
                  <li>
                    <Col className="case_row-col2">
                      <div className="case_row-col2-content">
                        <h1 className="case_row-col2-content-title">
                        Встроенное Управление Сообществом
                        </h1>
                        <img
                          // src={} 
                          alt="error" />
                      </div>
                      <p className="case_row-col2-text">
                      Модель управления BTCA включает в себя систему на основе блокчейна, 
                      использующую мастерноды, позволяющую финансировать предложения сообщества 
                      на основе консенсуса голосования.
                      </p>
                    </Col>
                  </li>
                </ul>
                <ul>
                  <li>
                  <Col className="case_row-col2">
                      <div className="case_row-col2-content">
                        <h1 className="case_row-col2-content-title">
                        Преданные Разработчики
                        </h1>
                        <img
                          // src={} 
                          alt="error" />
                      </div>
                      <p className="case_row-col2-text">
                      Основная команда разработчиков BTCA состоит из 3-х опытных блокчейн-разработчиков 
                      с сумарным опытом в более чем 14-лет в сфере активной блокчейн-разработки, каждый 
                      из которых занимался разработкой и кодом BTCA в течение последних 3-ех лет. Вдобавок 
                      к этому 3-5 разработчиков сообщества продолжают оказывать дополнительную поддержку на 
                      регулярной основе.
                      </p>
                    </Col>
                  </li>
                  <li>
                    <Col className="case_row-col2">
                      <div className="case_row-col2-content">
                        <h1 className="case_row-col2-content-title">
                        Ваша Конфиденциальность. 
                        </h1>
                        <img
                          // src={} 
                          alt="error" />
                      </div>
                      <p className="case_row-col2-text">
                      Ваш баланс доступен для конфиденциальных транзакций в любое время. Держите вашу личность, 
                      адреса и балансы в тайне по желанию или при необходимости.
                      </p>
                    </Col>
                  </li>
                  <li>
                    <Col className="case_row-col2">
                      <div className="case_row-col2-content">
                        <h1 className="case_row-col2-content-title">
                        Безопасный Холодный Стекинг
                        </h1>
                        <img
                          // src={} 
                          alt="error" />
                      </div>
                      <p className="case_row-col2-text">
                      Храните юезопасно ваши PIV в холодном хранилище, 
                      пока горячий кошелек запускает стекинг, принося вам вознаграждения.
                      </p>
                    </Col>
                  </li>
                  <li>
                    <Col className="case_row-col2">
                      <div className="case_row-col2-content">
                        <h1 className="case_row-col2-content-title">
                        Потенциал Роста
                        </h1>
                        <img
                          // src={} 
                          alt="error" />
                      </div>
                      <p className="case_row-col2-text">
                      Имея рыночную разницу в около 1 миллиард долларов по сравнению с 
                      конкурентами, BTCA имеет огромные возможности для повышения в стоимости.
                      </p>
                    </Col>
                  </li>
                  <li>
                    <Col className="case_row-col2">
                      <div className="case_row-col2-content">
                        <h1 className="case_row-col2-content-title">
                        Бесконечное Финансирование
                        </h1>
                        <img
                          // src={} 
                          alt="error" />
                      </div>
                      <p className="case_row-col2-text">
                      Встроенное управление BTCA предусматривает распределение бюджета каждые 30 дней, 
                      гарантируя, что BTC доступны для непрерывной разработки и маркетинга. 
                      </p>
                    </Col>
                  </li>
                </ul>

              </Row>
            </Flex>


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

export default Why