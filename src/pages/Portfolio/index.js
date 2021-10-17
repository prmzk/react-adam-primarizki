import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { Button, Col, Container, Row } from 'react-bootstrap'
import Img from '../../assets/images/portfolio.jpg'
import { FaCube, FaRegSnowflake, FaFeatherAlt, FaThumbsUp } from "react-icons/fa";
import IconCard from './components/IconCard';
import SkillDiagram from './components/SkillDiagram';
import SkillBar from './components/SkillBar';

const topSkill = [
    {
        name: 'Design',
        icon: <FaCube size={48}/>,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        name: 'Develop',
        icon: <FaRegSnowflake size={48}/>,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        name: 'Write',
        icon: <FaFeatherAlt size={48}/>,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        name: 'Promote',
        icon: <FaThumbsUp size={48}/>,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
]

const skills = [
    {
        percentage: 57,
        name: 'Photography'
    },
    {
        percentage: 60,
        name: 'Marketing'
    },
    {
        percentage: 74,
        name: 'PHP'
    },
    {
        percentage: 31,
        name: '3D'
    }
]

const skills2 = [
    {
        percentage: 75,
        name: 'Creativity'
    },
    {
        percentage: 48,
        name: 'Cooking'
    },
    {
        percentage: 90,
        name: 'PHP'
    },
    {
        percentage: 62,
        name: 'Marketing'
    }
]

function Portfolio() {
    return (
        <section className='portfolio'>
            <Container>
                <Row>
                    <Col className='image d-flex justify-content-center mb-3' xl={3} md={12}>
                        <img src={Img} alt="moon"/>
                    </Col>
                    <Col xl={5} md={12} className='d-flex flex-wrap  justify-content-center mb-3'>
                        {topSkill.map((el, i) => <IconCard data={el} key={i}/>)}
                    </Col>
                    <Col xl={3} md={12} className='services'>
                        <h2 className='fw-bolder mb-3 fs-5 mt-3'>Services</h2>
                        <h4 className='mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <div className='d-flex mt-5'>
                            <Button className='me-3 px-4 py-2'>Download CV</Button>
                            <Button className='px-3 py-2'>Check My Portfolio</Button>
                        </div>
                    </Col>
                </Row>
                <div>
                    <h2 className='mt-4 fw-bold mb-5'>Skills</h2>
                    <Row className='mt-4'>
                        {skills.map(({percentage, name}, i) => <Col sm={12} md={6} lg={3} key={i} className='mb-3'>
                            <SkillDiagram valueProps={percentage} name={name}/>
                        </Col>)}
                    </Row>
                    <Row className='mt-4'>
                        {skills2.map(({percentage, name}, i) => <Col sm={12} md={12} lg={6} key={i} className='mb-3'>
                            <SkillBar valueProps={percentage} name={name}/>
                        </Col>)}
                    </Row>
                </div>
                
                
            </Container>
        </section>
    )
}

export default Portfolio
