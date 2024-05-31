import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"
import { Col, Flex } from "antd"
import catting from "../images/Chatting.png"
import abstract from "../images/3Dabstract.png"
import { Swiper,SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import github from "../images/swiper-icon/github.png"
import facebook from "../images/swiper-icon/facebook.png"
import twitter from "../images/swiper-icon/twitter.png"
import discord from "../images/swiper-icon/discord.png"
import instagram from "../images/swiper-icon/instagram.png"
import { Scrollbar, Navigation, Pagination } from "swiper/modules"

const Community = () => {

    return( 
        <Fragment>
            <section className="section__main-5">
                <Container className={"container__left"}>
                    <Flex className="banner-2" style={{ color: "#fff" }}>
                        <Col span={11} className="banner-2">
                            <h1 className="banner-2-title">
                            К сообществу BTCA
                            </h1>
                            <p className="banner-2-text">
                            Социальные сети, Телеграмм-каналы, онлайн-обсуждения, 
                            ответы на ваши самые сложные вопросы можно найти тут.
                            </p>
                        </Col>

                        <div className="Home_header_img">
                            <img className="Home_header_img-abs"
                                  src={abstract} 
                                alt="error" />
                            <img className="Home_header_img-bitcoin"
                                src={catting}
                                alt="error"
                            />
                        </div>
                    </Flex>
                </Container>
                <Container>
                    <div className="container-sl">
                      <Swiper 
                      effect={'coverflow'}
                      grabCursor={true}
                      centeredSlides={true}
                      loop={true}
                      slidesPerView={"auto"}
                      coverflowEffect={
                        {
                          rotate: 0,
                          stretch: 0,
                          depth: 100,
                          modifier: 2.5,
                        }
                      }
                      pagination={{el: ".swider-pagination", clickable:true}}
                      navigation={{
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev",
                        clickable: true,
                      }}
                      modules={[Scrollbar, Pagination, Navigation]}
                      className="swiper-container"
                      >
                        <SwiperSlide className="slide">
                          <div className="slide-image">
                            <div>
                              <img 
                              src={github}
                              alt="error"/>
                              <p>GitHub</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                          <div className="slide-image">
                            <div>
                              <img 
                              src={facebook}
                              alt="error"/>
                              <p>Facebook</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                          <div className="slide-image">
                            <div>
                              <img 
                              src={discord}
                              alt="error"/>
                              <p>Discord</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide">
                          <div className="slide-image">
                            <div>
                              <img 
                              src={twitter}
                              alt="error"/>
                              <p>Twitter</p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="slide-image">
                            <div>
                              <img 
                              src={instagram}
                              alt="error"/>
                              <p>Instagram</p>
                            </div>
                          </div>
                        </SwiperSlide>

                        <div className="slider-controler">
                          <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                          </div>
                          <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                          </div>
                          <div className="swider-pagination"></div>
                        </div>
                      </Swiper>
                    </div>
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

export default Community