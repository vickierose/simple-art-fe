import { combineReducers } from 'redux'
import teacherReducer from '../teacher/teacherReducer'
import coursesReducer from './coursesReducer'

const rootReducer = combineReducers({
    courses: coursesReducer,
    teacher: teacherReducer
})

export default rootReducer