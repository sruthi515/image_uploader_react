import { combineReducers } from 'redux'
import { UPLOAD_IMAGE, DRAG_LEAVE,DRAGS, ON_DROP, DROP, ON_CHANGE, FILES  } from '../actions'

function imageUploaderReducers(state = [], action) {
   switch (action.type) {
      case 'UPLOAD_IMAGE':
         return [...state,{
                     id: action.id,
                     img: action.img,
                }]
      case 'DRAG_LEAVE':
         return [...state,{
                     id: action.id,
                     img: action.img,
               }]
      case 'DRAGS':
         return [...state,{
                     id: action.id,
                     img: action.img,
                  }]
      case 'ON_DROP':
         return [...state,{
                     id: action.id,
                     img: action.img,
                  }]         
      case 'DROP':
         return [...state,{
                     id: action.id,
                     img: action.img,
                  }]
      case 'FILES':
         return [...state,{
                     id: action.id,
                     img: action.img,
                  }]                                          
      default:return state;
   }
}
const imageUploaderApp = combineReducers({imageUploaderReducers})
export default imageUploaderApp
