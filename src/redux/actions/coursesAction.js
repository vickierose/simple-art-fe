import coursesRequests from "../services/coursesRequests";
import types from "../types";

const getCoursesAction = () => dispatch => {
    return coursesRequests.getAllCourses().then(res => dispatch({
        type: types.courses.FETCH_COURSES_SUCCESS,
        payload: res.data
    }));
}

export default getCoursesAction;