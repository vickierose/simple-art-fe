import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

import './styles.scss'

import Button from '../../../commonComponents/Button/Button'

function SingleCourse() {
    const { courseId } = useParams();
    const data = useSelector(state => state.courses);
    const singleCourse = data.courses.find(el => el.id === courseId);
    return (
        <>{data ? <section className="content">
            <section className="left">
                <h1 className="header_h1_bold">{singleCourse?.name}</h1>
                <section className="card-info-all width-content">
                    <section className="card-info">
                        <p className="general_subtext_light">Level:</p>
                        <p className="general_subtext_light">{singleCourse?.level}</p>
                    </section>
                    <section className="card-info">
                        <p className="general_subtext_light duration-center">Duration</p>
                        <p className="general_subtext_light">
                            <span>{singleCourse?.duration}</span>
                            <br />
                            <span>{singleCourse?.periodicity}</span>
                        </p>
                    </section>
                </section>
                <p className="header_h5_medium">You will learn:</p>
                <section className="form-content">
                    <ul>
                        {singleCourse?.description_full.map((el, i) => {
                            return <li key={i} className="general_text course-describe-list">{el}</li>
                        })}
                    </ul>
                </section>
                <section className="price-block width-content">
                    <h4 className="header_h4_semibold price-title">Price: </h4>
                    <p className="header_h4_semibold price">$ {singleCourse?.price}</p>
                </section>
                {/* TODO add passing data to applyPage */}
                <Button name='Apply now' classN='apply-btn' />
            </section>
            <div className="right"><img className="image" src={singleCourse?.full_img_url} alt="course-pic" /></div>
        </section>
            : <h1>loading...</h1>}

        </>
    )
}

export default SingleCourse
