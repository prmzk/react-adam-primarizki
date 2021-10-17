import { Button, Container } from "react-bootstrap";
import MoonImg from '../../assets/images/moon.jpg'

function Demo() {
  return (
    <section className="demo">
      <div className="banner d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center text-white fw-bold mb-3 px-4">Welcome to Adam Primarizki Website</h1>
        <h2 className="fs-6 text-center text-white mt-4 w-75 mb-5 px-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h2>
        <Button variant="warning" className="fw-bold px-4 py-2 mx-4">{'Find Out More >'}</Button>
        <div className="waves"/>
      </div>

      <Container>
        <section className="content py-5">
          <h1 className="text-center fw-bolder fs-2 mb-5">Website Content</h1>
          <div className="d-flex w-75 mx-auto align-items-center">
            <div className="me-5">
              <p className="text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div>
              <img src={MoonImg} alt="moon" style={{width: 408, height: 272}}/>
            </div>
          </div>
          <div className="d-flex w-75 mx-auto align-items-center mt-5">
            <div className="me-5">
              <img src={MoonImg} alt="moon" style={{width: 408, height: 272}}/>
            </div>
            <div>
              <p className="text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
          </div>
        </section>
        <section className="content py-5">
          <h1 className="text-center fw-bolder fs-2 mb-5">Website Content 2</h1>
          <div className="d-flex w-75 mx-auto align-items-center">
            <div className="me-5">
              <p className="text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div>
              <img src={MoonImg} alt="moon" style={{width: 408, height: 272}}/>
            </div>
          </div>
          <div className="d-flex w-75 mx-auto align-items-center mt-5">
            <div className="me-5">
              <img src={MoonImg} alt="moon" style={{width: 408, height: 272}}/>
            </div>
            <div>
              <p className="text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
          </div>
        </section>
        <section className="mt-5 mb-5">
          <p className="text-center mb-2">Made by Adam Primarizki</p>
          <p className="text-center">Built with React</p>
        </section>
      </Container>
    </section>
  )
}

export default Demo;
