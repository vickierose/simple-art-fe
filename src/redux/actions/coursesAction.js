import coursesRequests from "../services/coursesRequests";
import courses from "../types/coursesTypes";

const getCoursesAction = () => dispatch => {
    return coursesRequests.getAllCourses().then(res => dispatch({
        type: courses.FETCH_COURSES_SUCCESS,
        payload: res.data
    })).catch(err => dispatch({
        type: courses.FETCH_COURSES_FAILED,
        payload: err.error
    }));
}

export default getCoursesAction;