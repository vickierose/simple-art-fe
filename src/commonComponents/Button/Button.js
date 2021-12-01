import React from 'react'
import './styles.scss'

function Button({ name = 'Apply', classN = '', onClick, disabled }) {
    // function Redirect() {
    //     console.log('qqq');
    //     let navigate = useNavigate();
    //     useEffect(() => {
    //             navigate("/apply");
    //     }, []);
    // }
    return (
        <button disabled={disabled} onClick={onClick} className={`btn misc_button1_bold ${classN}`}>{name}</button>
    )
}

export default Button