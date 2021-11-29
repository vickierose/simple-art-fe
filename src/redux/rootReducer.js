import { combineReducers } from 'redux'
import teacherReducer from './teacher/teacherReducer'

const rootReducer = combineReducers({
  teacher: teacherReducer
})

export default rootReducer