import React from 'react'
import './TeachersPage.scss'

function Teacher(props) {
    return (
        <section className="teacherBlock">
            <img className="teacherBlock__photo" src={props.photo}></img>
            <h3 className="teacherBlock__name header_h3_bold">{props.fname} {props.lname}</h3>
                <section className="teacherBlock__info_block">
                    <section className="teacherBlock__info_block__blockTitle header_h5_medium">Courses:</section>
                    <section className="teacherBlock__info_block__blockInfo general_text">{props.coursesList}</section>
                </section>
                <section className="teacherBlock__info_block">
                    <section className="teacherBlock__info_block__blockTitle header_h5_medium">Education:</section>
                    <section className="teacherBlock__info_block__blockInfo general_text">{props.education}</section>
                </section>
                <section className="teacherBlock__info_block">
                    <section className="teacherBlock__info_block__blockTitle header_h5_medium">About me:</section>
                    <section className="teacherBlock__info_block__blockInfo general_text">{props.about}</section>
                </section>
        </section>
    )
}

export default Teacher;
