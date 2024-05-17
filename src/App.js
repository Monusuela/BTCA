import { Fragment } from "react"
import "./App.scss"
import Container from "./components/container";
import { Route, Routes, Link } from "react-router-dom";
import { Flex, Button } from "antd";
import { TfiWorld } from "react-icons/tfi";
import { RiGradienterLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbCoinBitcoin } from "react-icons/tb";
import { Content } from "antd/es/layout/layout";
import Footer from "./layout/footer";
import Home from "./pages/Home";
import ProofOfStake from "./pages/ProofOfStake";

// import { BsCurrencyBitcoin } from "react-icons/bs";




const App = () => {
  return (
    <Fragment>
      <header className="header" >
        <Container>
          <Flex className="header-main">
            <Flex>
              <nav className="header-main__menu">

                <TbCoinBitcoin style={{
                  color: "lightskyblue", transform: "scale(2.7)"
                }} />

                <Link className="header-main__menu-link" to={"/"} >Функции</Link>
                <Link className="header-main__menu-link" to={"/"} >Кошельки</Link>
                <Link className="header-main__menu-link" to={"/"} >Участие</Link>
                <Link className="header-main__menu-link" to={"/"} >Ресурсы</Link>
                <Link className="header-main__menu-link" to={"/"} >Новости</Link>
                <Link className="header-main__menu-link" to={"/"} >О BTCA</Link>

              </nav>

            </Flex>
            <Flex className="header-main__end">

              <Button className="header-main__end-button" icon={<TfiWorld style={{ color: "white" }} />}>Rus</Button>
              <Button className="header-main__end-button" backgroundColor="gradients/input70" icon={<RiMoneyDollarCircleLine style={{ color: "white", backgroundColor: "orange", borderRadius: "100%" }} />}>10.834</Button>


            </Flex>
          </Flex>
        </Container>
      </header>

      <Content>
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/poorOfStake" element={<ProofOfStake/>} />

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