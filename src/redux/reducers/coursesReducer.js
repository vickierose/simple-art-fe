import types from "../types";

const initialState = {
    loading: false,
    courses: [],
    error: ''
}

const coursesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case types.courses.FETCH_COURSES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case types.courses.FETCH_COURSES_SUCCESS:
            return {
                courses: payload,
                loading: false,
                error: ''
            }

        case types.courses.FETCH_COURSES_FAILED:
            return {
                ...state,
                error: payload
            }

        default: return state
    }
}

export default coursesReducer;