import { Container } from 'react-bootstrap'
import MoonImg from '../../../assets/images/moon.jpg'

const Content = () => {
    return (
        <Container>
        <section className="content py-5">
            <h1 className="text-center fw-bolder fs-2 mb-5">Website Content</h1>
            <div className="d-flex w-75 mx-auto align-items-center flex-lg-row flex-column-reverse">
                <div className="me-lg-5">
                    <p className="text-black text-lg-left text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div>
                    <img src={MoonImg} alt="moon"/>
                </div>
            </div>
            <div className="d-flex w-75 mx-auto align-items-center mt-5 flex-lg-row flex-column">
                <div className="me-lg-5">
                    <img src={MoonImg} alt="moon"/>
                </div>
                <div>
                    <p className="text-black text-lg-left text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div>
        </section>
        <section className="content py-5">
            <h1 className="text-center fw-bolder fs-2 mb-5">Website Content 2</h1>
            <div className="d-flex w-75 mx-auto align-items-center flex-lg-row flex-column-reverse">
                <div className="me-lg-5">
                    <p className="text-black text-lg-left text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div>
                    <img src={MoonImg} alt="moon"/>
                </div>
            </div>
            <div className="d-flex w-75 mx-auto align-items-center mt-5 flex-lg-row flex-column">
                <div className="me-lg-5">
                    <img src={MoonImg} alt="moon"/>
                </div>
                <div>
                    <p className="text-black text-lg-left text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div>
        </section>
        <section className="mt-5 mb-5">
            <p className="text-center mb-2">Made by Adam Primarizki</p>
            <p className="text-center">Built with React</p>
        </section>
    </Container>
    )
}

export default Content
