import { Fragment } from "react";
import Container from "../components/container";
import { Button, Col, Flex, Row } from "antd";
import Title from "antd/es/skeleton/Title";
import { TfiAndroid, TfiApple, TfiLinux } from "react-icons/tfi";
import { RiWindowsFill } from "react-icons/ri";


const Footer = () => {
    return(
        <Fragment>
            <footer>
                <Container>
                    <Row>
                        <Col>
                        <Title level={"h2"} style={{color: "black"}}>rovas</Title>
                        <Flex>
                        <Button icon={<TfiAndroid/>}/>
                        <Button icon={<TfiApple/>}/>
                        <Button icon={<TfiLinux />}/>
                        <Button icon={<RiWindowsFill />}/>
                        </Flex>
                        <Title>Никогда не пропускайте обновления</Title>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Fragment>
    )
}

export default Footer;