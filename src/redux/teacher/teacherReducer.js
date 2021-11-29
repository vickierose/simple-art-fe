import { FETCH_TEACHERS_FAILURE, FETCH_TEACHERS_REQUEST, FETCH_TEACHERS_SUCCESS } from "./teacherTypes"

const initialState = {
    loading: false,
    teachers: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEACHERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TEACHERS_SUCCESS:
            return {
                loading: false,
                teachers: action.payload,
                error: ''
            }
        case FETCH_TEACHERS_FAILURE:
            return {
                loading: false,
                teachers: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer