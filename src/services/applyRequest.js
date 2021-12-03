import axios from "axios";

function applyRequest(userData) {
    return axios.post('http://localhost:5000/form/apply', userData);
}

export default applyRequest;