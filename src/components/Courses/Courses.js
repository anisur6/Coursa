import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [course, setcourse] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setcourse(data));
    }, [])

    return (
        <div>
            <Container className='my-5'>
            <Row xs={1} md={3} className="g-4">
                {
                    course.map(course => <Course course={course}></Course>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default Courses;