import {Fragment} from "react";
import Container from "../components/container";
import {Space} from "antd";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return(
      <Fragment>
        <Helmet>
                <h1>BTCA - Not Found</h1>
            </Helmet>
          <section className="NotFound">
              <Container className={"NotFound-container"}>
                  <Space className={`NotFound__content`}>

                      <div className="NotFound__content" >
                          <h1 className="NotFound__content-text1">
                              Not Found 404
                          </h1>

                          <h1 className="NotFound__content-text2" >OOOOO NO!!!!</h1>
                      </div>
                  </Space>
              </Container>
          </section>
      </Fragment>
  )
}

export default  NotFound;