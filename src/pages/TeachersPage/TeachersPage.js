import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeachers } from '../../redux/teacher/teacherActions'
import Teacher from './Teacher';
import './TeachersPage.scss'


function TeachersPage({ teacherData, fetchTeachers }) {
    useEffect(() => {
        fetchTeachers()
    }, []);

    console.log(teacherData.teachers)

    return (
        <section className="teachersPage-wrap">
            <p className="header_h1_bold">Meet our great team!</p>
            <section className="teachersList">
        {
            teacherData.teachers
                .map(teach => <Teacher fname={teach.first_name} lname={teach.last_name} photo={teach.photo} coursesList={teach.courses} education={teach.education} about={teach.about}></Teacher>)
        }
        </section>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        teacherData: state.teacher
    }
}

const mapDispatchTotProps = dispatch => {
    return {
        fetchTeachers: () => dispatch(fetchTeachers())
    }
}

export default connect(mapStateToProps, mapDispatchTotProps)(TeachersPage)
