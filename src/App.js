import { Fragment } from "react"
import "./App.scss"
import Container from "./components/container";
import { Route, Routes, Link } from "react-router-dom";
import { Flex, Button } from "antd";
import { TfiWorld } from "react-icons/tfi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbCoinBitcoin } from "react-icons/tb";
import { Content, Footer } from "antd/es/layout/layout";
// import { BsCurrencyBitcoin } from "react-icons/bs";




const App = () => {
  return (
    <Fragment>
      <header className="header" backgroundColor="">
        <Container>
          <Flex className="header-main">
          <Flex>
                <nav className="header-main__menu">

                  <TbCoinBitcoin style={{color: "white", size: "100px"}}/>

                  <Link to={"/"} className="">Функции</Link>
                  <Link to={"/"} className="">Кошельки</Link>
                  <Link to={"/"} className="">Участие</Link>
                  <Link to={"/"} className="">Ресурсы</Link>
                  <Link to={"/"} className="">Новости</Link>
                  <Link to={"/"} className="">О BTCA</Link>

                </nav>
                
          </Flex>
          <Flex className="header-main__end">

                  <Button className="header-main__end-button" icon={<TfiWorld style={{ color: "white" }} />}>Rus</Button>
                  <Button className="header-main__end-button" backgroundColor="gradients/input70" icon={<RiMoneyDollarCircleLine style={{ color: "white", backgroundColor: "orange", borderRadius:"100%" }} />}>10.834</Button>
             
             
          </Flex>
          </Flex>
        </Container>
      </header>

      <Content>
        <Routes>
          {/* <Route path="/" element={} /> */}

          {/* <Route path="/" element={} /> */}

          {/* <Route path="/" element={} /> */}

          {/* <Route path="/" element={} /> */}

          {/* <Route path="/" element={} /> */}

          {/* <Route path="/" element={} /> */}
        </Routes>
      </Content>

      <Footer />
    </Fragment>
  )
}

export default App