import * as axios from 'axios';

export default function sendEmail(inputValue) {
    return axios.post('http://localhost:5000/form/subscribe', inputValue)
    .then(function (response) {
        console.log(response);
    })
}


