import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

import ConfirmationPage from '../../components/ConfirmationPage/ConfirmationPage'
import Button from '../../commonComponents/Button/Button'
import Dropdown from '../../commonComponents/Dropdown/Dropdown'
import Pic3 from '../../assets/images/Img3.png'
import { useDispatch } from 'react-redux'

import './styles.scss'
import { setSelectedCourses } from '../../redux/actions/coursesAction'
import applyRequest from '../../services/applyRequest'

function ApplyPage() {
    const data = useSelector(state => state.courses);
    const dispatch = useDispatch();

    const [confirm, setConfirm] = useState(false);

    const [course, setCourse] = useState(useSelector(state => state.courses.selectedCourse));
    const [group, setGroup] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        if (course) {
            selectCourse(course);
        }
    }, [course])

    function setDataToState(e) {
        switch (e.target.name) {
            case 'course':
                setCourse(e.target.value);
                break;
            case 'group':
                setGroup(e.target.value);
                break;
            case 'fullName':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'phone':
                let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                const value = !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '');
                setPhone(value);
                break;
            default:
                break;
        }
    }

    function checkValid() {
        let checkPhone = false;
        const phoneRegex = /^\(?([0-9]{3})\)([0-9]{3})[-]?([0-9]{2})[-]?([0-9]{2})$/;

        let checkEmail = false;
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (emailRegex.test(email)) {
            checkEmail = true;
        }

        if (phoneRegex.test(phone)) {
            checkPhone = true;
        }

        if (course && group && name.length >= 3 && checkEmail && checkPhone) {
            return false;
        }

        return true;
    }

    function selectCourse(singleCourse) {
        const dropdownGroups = singleCourse.groups.map(el => {
            el['value'] = `${el.days} ${el.time} ${el.mode}`
            return el;
        })
        setGroups(dropdownGroups);
    }

    function submit(event) {
        const userData = {
            courseId: course.id,
            groupId: group.id,
            full_name: name,
            email: email,
            phone: phone
        };
        setConfirm(true);
        dispatch(setSelectedCourses(null));
        applyRequest(userData);
        event.preventDefault();
    }

    return (
        <>
            {confirm ? <ConfirmationPage /> :
                <section className="content">
                    <section className="left">
                        <h1 className="header_h1_bold">Apply to desired course right away!</h1>
                        <p className="general_text text">Select desired course and group, leave us your contact information
                            and we’ll reach out to you for confirmation and letting you know about further steps.</p>
                        <form>
                            <section className="space">
                                <section className="form-content">
                                    <h5 className="header_h5_medium text">Course</h5>
                                    <Dropdown
                                        defaultValue={course}
                                        name="course"
                                        keyValue='name'
                                        value={data.courses}
                                        onChange={(el) => { setCourse(el) }}
                                    />
                                </section>
                                <section className="form-content">
                                    <h5 className="header_h5_medium text">Group</h5>
                                    <Dropdown
                                        keyValue='value'
                                        disabled={!course}
                                        name="group"
                                        value={groups}
                                        onChange={(el) => setGroup(el)}
                                    />
                                </section>
                            </section>
                            <section className="space">
                                <section className="form-content">
                                    <h5 className="header_h5_medium text">Full name</h5>
                                    <input
                                        className="general_text inputs"
                                        minLength='3'
                                        name="fullName"
                                        type='text'
                                        onChange={setDataToState}
                                    />
                                </section>
                                <section className="form-content">
                                    <h5 className="header_h5_medium text">E-mail</h5>
                                    <input
                                        className="general_text inputs"
                                        placeholder="email@email.com"
                                        value={email}
                                        name="email"
                                        type='text'
                                        onChange={setDataToState}
                                    />
                                </section>
                                <section className="form-content">
                                    <h5 className="header_h5_medium text">Phone number</h5>
                                    <input
                                        className="general_text inputs"
                                        name="phone"
                                        value={phone}
                                        placeholder="(___)___-__-__"
                                        type="text"
                                        onChange={setDataToState}
                                    />
                                </section>
                            </section>
                            <Button
                                name='Apply'
                                onClick={submit}
                                classN={checkValid() && "disabled"}
                                disabled={checkValid()}
                            />
                        </form>
                    </section>
                    <div className="right"><img className="image" src={Pic3} alt="palette-pic" /></div>
                </section>
            }
        </>
    )
}

export default ApplyPage
