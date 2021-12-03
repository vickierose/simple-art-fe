import courses from './../types/coursesTypes'

const initialState = {
    loading: false,
    courses: [],
    error: ''
}

const coursesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch (type) {
        case courses.FETCH_COURSES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case courses.FETCH_COURSES_SUCCESS:
            return {
                courses: payload,
                loading: false,
                error: ''
            }

        case courses.FETCH_COURSES_FAILED:
            return {
                ...state,
                error: payload
            }

        case courses.SELECTED_COURSE:
            return {
                ...state,
                selectedCourse: payload
            }

        default: return state
    }
}

export default coursesReducer;