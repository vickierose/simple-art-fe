import axios from "axios";

const coursesRequests = {
    getAllCourses: () => {
        return axios.get('http://localhost:5000/courses');
    }
}

export default coursesRequests;