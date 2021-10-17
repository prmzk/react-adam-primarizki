import { Button } from 'react-bootstrap'

const Banner = () => {
    return (
        <div className="banner d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center text-white fw-bold mb-3 px-4">Welcome to Adam Primarizki Website</h1>
            <h2 className="fs-6 text-center text-white mt-4 w-75 mb-5 px-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h2>
            <Button variant="warning" className="fw-bold px-4 py-2 mx-4">{'Find Out More >'}</Button>
            <div className="waves"/>
        </div>
    )
}

export default Banner
