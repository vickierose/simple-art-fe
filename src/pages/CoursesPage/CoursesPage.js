import React from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import Button from '../../commonComponents/Button/Button'

import './styles.scss'
import { setSelectedCourses } from '../../redux/actions/coursesAction'

function CoursesPage() {
    let navigate = useNavigate();
    const data = useSelector(state => state.courses);

    const dispatch = useDispatch();

    function applyCourse(el) {
        dispatch(setSelectedCourses(el));
        navigate(`/apply`);
    }

    return (
        <>
            <h1 className="header_h1_bold">Pick your perfect course!</h1>

            <section className="all-cards">
                {data && data.courses.map((el) => {
                    return <section key={el.id} className="card" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigate(`/courses/${el.id}`);
                    }}>
                        <div><img className="course-image" src={el.thumbnail_img_url} alt="course_picture" /></div>
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
                                    <p className="general_subtext_light">
                                        <span>{el.duration}</span>
                                        <br />
                                        <span>{el.periodicity}</span>
                                    </p>
                                </section>
                            </section>
                            <section className="card-text text-height">
                                <p className="general_subtext_light clip">{el.description_short}</p>
                            </section>
                            <Button name='Apply' classN="course-apply" onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                applyCourse(el);
                            }
                            } />
                        </section>
                    </section>
                })}

            </section>

        </>
    )
}

export default CoursesPage
