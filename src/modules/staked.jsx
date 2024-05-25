import { Button, Col, Flex } from "antd"
import { Fragment } from "react"
import Container from "../components/container"

const staked = () => {
    return(
        <Fragment>
            <Container className={"container__left"}>
          <Flex className="banner-2" style={{ color: "#fff" }}>
            <Col span={11} className="banner-2">
              <h1 className="banner-2-title">
              Staking Rewards
              </h1>
              <p className="banner-2-text">
              Estimate your rewards and see how simple it is to receive staking rewards with BTCA
              </p>
              <p>
              There is no way to know how many nodes are running on the network, and how 
              much PIV is being staked at any given time, so these calculations are educated estimates.
              </p>
              <Button>NOTE</Button>
            </Col>

            <div className="Home_header_img2">
                <div>
                    <div>
                        <p>Total BTCA staked</p>
                        <h1>10 000</h1>
                    </div>
                </div>
                <div>
                    <p>Estimated 6.5% annual reward</p>
                </div>
                <div>
                    <div>
                        <p>Daily rewards:</p>
                        <p>1.343945 BTCA</p>
                    </div>
                    <div>
                        <p>Weekly rewards:</p>
                        <p>23.343945 BTCA</p>
                    </div>
                    <div>
                        <p>Monthly rewards:</p>
                        <p>23.343945 BTCA</p>
                    </div>
                    <div>
                        <p>Yearly rewards:</p>
                        <p>23.343945 BTCA</p>
                    </div>
                </div>
            </div>
          </Flex>
        </Container>
        </Fragment>
    )
}

export default staked