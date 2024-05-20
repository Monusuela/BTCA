import {Fragment} from "react";
import Container from "../components/container";
import {Space, Typography} from "antd";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return(
      <Fragment>
        <Helmet>
                <h1>BTCA - Not Found</h1>
            </Helmet>
          <section className="NotFound">
              <Container>
                  <Space align={"center"} className={`NotFound__content`}>

                      <div >
                          <Typography.Title level={1} style={{color: "red", fontSize: "90px", paddingTop: "50px"}}>
                              Not Found 404
                          </Typography.Title>

                          <h1 bodyText={"p"} style={{color: "orange", fontSize: "50px", paddingTop: "400px", paddingLeft: "170px"}}>OOOOO NO!!!!</h1>
                      </div>
                  </Space>
              </Container>
          </section>
      </Fragment>
  )
}

export default  NotFound;