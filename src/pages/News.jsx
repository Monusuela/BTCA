import { Fragment } from "react"
import Container from "../components/container"
import Subscribe from "../modules/subscribe"

const News = () => {
    return( 
        <Fragment>
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

export default News