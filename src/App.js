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
import Questions from "./pages/Questions";
import NotFound from "./pages/NotFound";
import QuestionsForm from "./modules/QuestionsForm";
import ColdStaking from "./pages/ColdStakind";
import Shield from "./pages/Shield";
import Downloads from "./pages/Downloads";
import Masternoads from "./pages/Masternoads";
import Merchant from "./pages/Merchant";
import Statistics from "./pages/Statistics";
import Documents from "./pages/Documents";
import Community from "./pages/Community";
import News from "./pages/News";
import Why from "./pages/Why";
import Comment from "./pages/Support";

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
                <Link className="header-main__menu-link" to="/news" >Новости</Link>
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

          <Route path="/questions" element={<Questions/>} />

          <Route path={"*"} element={<NotFound/>} />

          <Route path="/coldStaking" element={<ColdStaking/>} />

          <Route path="/shield" element={<Shield/>} />

          <Route path="/downloads" element={<Downloads/>} />

          <Route path="/masternoads" element={<Masternoads/>} />

          <Route path="/merchant" element={<Merchant/>} />

          <Route path="/statistics" element={<Statistics/>} />

          <Route path="/documents" element={<Documents/>} />

          <Route path="/community" element={<Community/>} />

          <Route path="/news" element={<News/>} />

          <Route path="/why" element={<Why/>} />

          <Route path="/questions" element={<Questions/>} />

          {/* <Route path="/comment" element={<Comment/>} /> */}

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