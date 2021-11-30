import React from 'react'
import { useNavigate } from 'react-router'

import Course_img from '../../assets/images/course_img.png'
import Button from '../../commonComponents/Button/Button'

import { courseData } from '../../assets/courseData'

import './styles.scss'

function CoursesPage() {
    let navigate = useNavigate();

    return (
        <>
            <h1 className="header_h1_bold">Pick your perfect course!</h1>

            <section className="all-cards">
                {courseData.map((el) => {
                    //console.log(el);
                    return <section key={el.id} className="card">
                        <div><img className="course-image" src={Course_img} alt="course_picture" /></div>
                        <section className="card-content">
                            <section className="card-title">
                                <h4 className="header_h4_semibold">{el.name}</h4>
                                <p className="header_h4_semibold price">$ {el.price}</p>
                            </section>
                            <section className="card-info-all">
                                <section className="card-info">
                                    <p className="general_subtext_light">Level:</p>
                                    <p className="general_subtext_light">{el.level}</p>
                                </section>
                                <section className="card-info">
                                    <p className="general_subtext_light duration-center">Duration</p>
                                    <p className="general_subtext_light"><span>{el.duration}</span> <br /> <span>{el.periodicity}</span></p>
                                </section>
                            </section>
                            <section className="card-text text-height">
                                <p className="general_subtext_light clip">{el.description_short}</p>
                            </section>
                            <Button name='Apply' classN="course-apply" onClick={() => navigate(`/courses/${el.id}`)} />
                        </section>
                    </section>
                })}

            </section>

        </>
    )
}

export default CoursesPage
