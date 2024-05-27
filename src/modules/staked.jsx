import { Button, Col, Flex } from "antd"
import { Fragment } from "react"
import Container from "../components/container"

const staked = () => {
    return (
        <Fragment>
            <Container className={"container__left5"}>
                <Flex className="banner-3" style={{ color: "#fff" }}>
                    <Col span={11} className="banner-3">
                        <h1 className="banner-3-title">
                            Staking Rewards
                        </h1>
                        <p className="banner-3-text">
                            Estimate your rewards and see how simple it is to receive staking rewards with BTCA
                        </p>
                        <p className="banner-3-text2">
                            There is no way to know how many nodes are running on the network, and how
                            much PIV is being staked at any given time, so these calculations are educated estimates.
                        </p>
                        <Button className="banner-3-button">NOTE</Button>
                    </Col>

                    <div className="total">
                        <div>
                            <div className="total-staked">
                                <p className="total-staked-text">Total BTCA staked</p>
                                <h1 className="total-staked-title">10 000</h1>
                            </div>
                        </div>
                        <div>
                            <div className="estimated">
                                <p className="estimated-text">Estimated 6.5% annual reward</p>
                            </div>
                        </div>
                        <div>
                            <div className="estimated-list" >
                                <div className="estimated-list-data">
                                    <p className="estimated-list-data-text">Daily rewards:</p>
                                    <p className="estimated-list-data-number">1.343945 BTCA</p>
                                </div>
                                <div className="estimated-list-data">
                                    <p className="estimated-list-data-text">Weekly rewards:</p>
                                    <p className="estimated-list-data-number">23.343945 BTCA</p>
                                </div>
                                <div className="estimated-list-data">
                                    <p className="estimated-list-data-text">Monthly rewards:</p>
                                    <p className="estimated-list-data-number">23.343945 BTCA</p>
                                </div>
                                <div className="estimated-list-data">
                                    <p className="estimated-list-data-text">Yearly rewards:</p>
                                    <p className="estimated-list-data-number">23.343945 BTCA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Flex>
            </Container>
        </Fragment>
    )
}

export default staked