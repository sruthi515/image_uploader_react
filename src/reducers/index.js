import { combineReducers } from 'redux'
import { UPLOAD_IMAGE, DRAG_LEAVE, DRAG_ENTER, DRAG_OVER, REMOVE  } from '../actions'

 function fileHandler(state = [], action) {
   switch (action.type) {
      case UPLOAD_IMAGE:
         return [...state, {
                     id: action.id,
                     file: action.file,
                     url: action.url
                }]

      case REMOVE:
            return state.filter.filter((file_details) => file_details.id !== action.id)

      default: return state;
   }
} 

function dragHandler(state = false, action) {
   switch (action.type) {

      case DRAG_LEAVE:
         return false

      case DRAG_ENTER:
         return true
      
      case DRAG_OVER:
            return false

      default: return state;
   }
}
const uploadReducer = combineReducers({ files_info: fileHandler,
                                        isDragging: dragHandler })
export default uploadReducer
