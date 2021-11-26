import React, { Fragment, useState } from 'react'

import ComfirmationPage from '../../Components/ComfirmationPage/ComfirmationPage'
import Button from '../../commonComponents/Button/Button'
import Dropdown from '../../commonComponents/Button/Dropdown/Dropdown'
import Pic3 from '../../assets/images/Img3.png'

import './styles.scss'

function ApplyPage() {
    const [confirm, setConfirm] = useState(false);

    const [course, setCourse] = useState('');
    const [group, setGroup] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function setDataToState(e) {
        console.log(e)
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

    function submit(event) {
        const user = {
            courseId: course,
            groupId: group,
            full_name: name,
            email: email,
            phone: phone
        };
        console.log(user);
        setConfirm(true);
        event.preventDefault();
    }

    const arrMain = [
        {
            id: 1,
            value: 'text1, text1, text1'
        },
        {
            id: 2,
            value: 'text2, text2, text2'
        }
    ];

    return (
        <Fragment>
            {confirm ? <ComfirmationPage /> :
                <section className="content">
                    <section className="left">
                        <h1 className="header_h1_bold">Apply to desired course right away!</h1>
                        <p className="general_text text">Select desired course and group, leave us your contact information
                            and we’ll reach out to you for confirmation and letting you know about further steps.</p>
                        <form>
                            <section className="space">
                                <section className="form-content">
                                    <p className="header_h5_medium text">Course</p>
                                    {/* <select name="course" className="general_text inputs selector" onChange={setDataToState}>
                                        <option value="" hidden>Select...</option>
                                        <option value="grapefruit">Grapefruit</option>
                                        <option value="lime">Lime</option>
                                        <option value="coconut">Coconut</option>
                                        <option value="mango">Mango</option>
                                    </select> */}
                                    <Dropdown name="course" value={arrMain} onChange={(e) => setCourse(e.target.value)} />
                                </section>
                                <section className="form-content">
                                    <p className="header_h5_medium text">Group</p>
                                    {/* <select disabled={!course} name="group" className="general_text inputs selector" onChange={setDataToState}>
                                        <option value="" hidden>Select...</option>
                                        <option value="grapefruit">Grapefruit</option>
                                        <option value="lime">Lime</option>
                                        <option value="coconut">Coconut</option>
                                        <option value="mango">Mango</option>
                                    </select> */}
                                    <Dropdown disabled={!course} name="group" value={arrMain} onChange={(e) => setGroup(e.target.value)} />
                                </section>
                            </section>
                            <section className="space">
                                <section className="form-content">
                                    <p className="header_h5_medium text">Full name</p>
                                    <input className="general_text inputs" minLength='3' name="fullName" type='text' onChange={setDataToState}></input>
                                </section>
                                <section className="form-content">
                                    <p className="header_h5_medium text">E-mail</p>
                                    <input className="general_text inputs" placeholder="email@email.com" value={email} name="email" type='text' onChange={setDataToState}></input>
                                </section>
                                <section className="form-content">
                                    <p className="header_h5_medium text">Phone number</p>
                                    <input className="general_text inputs" name="phone" value={phone} placeholder="(___)___-__-__" type="text" onChange={setDataToState}></input>
                                </section>
                            </section>
                            <Button name='Apply' onClick={submit} classN={checkValid() && "disabled"} disabled={checkValid()} />
                        </form>
                    </section>
                    <div className="right"><img className="image" src={Pic3} alt="palette-pic" /></div>
                </section>
            }

        </Fragment>
    )
}

export default ApplyPage
