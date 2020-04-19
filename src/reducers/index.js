import { combineReducers } from 'redux'
import { UPLOAD_IMAGE, DRAG_LEAVE, DRAG_ENTER, DRAG_OVER  } from '../actions'

 function fileHandler(state = [], action) {
   switch (action.type) {
      case UPLOAD_IMAGE:
         return [{
            id: action.id,
            file: action.file,
            url: action.url
         }, ...state]

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
