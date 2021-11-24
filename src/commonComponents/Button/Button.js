import React from 'react'

import './styles.scss'

function Button({ name = 'Apply', classN = '', onClick }) {
    // function Redirect() {
    //     console.log('qqq');
    //     let navigate = useNavigate();
    //     useEffect(() => {
    //             navigate("/apply");
    //     }, []);
    // }
    return (
        <button onClick={onClick} className={`btn ${classN}`}>{name}</button>
    )
}

export default Button
