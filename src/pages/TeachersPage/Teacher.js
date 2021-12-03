import React from 'react'
import './TeachersPage.scss'

function Teacher(props) {
    return (
        <section className="teacherBlock">
            <img className="teacherBlock__photo" src={props.photo}></img>
            <h3 className="teacherBlock__name header_h3_bold">{props.fname} {props.lname}</h3>
                <section className="teacherBlock__info_block">
                    <h5 className="teacherBlock__info_block__blockTitle header_h5_medium">Courses:</h5>
                    <p className="teacherBlock__info_block__blockInfo general_text">{props.coursesList}</p>
                </section>
                <section className="teacherBlock__info_block">
                    <h5 className="teacherBlock__info_block__blockTitle header_h5_medium">Education:</h5>
                    <p className="teacherBlock__info_block__blockInfo general_text">{props.education}</p>
                </section>
                <section className="teacherBlock__info_block">
                    <h5 className="teacherBlock__info_block__blockTitle header_h5_medium">About me:</h5>
                    <p className="teacherBlock__info_block__blockInfo general_text">{props.about}</p>
                </section>
        </section>
    )
}

export default Teacher;
