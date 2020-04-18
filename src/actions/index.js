export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'
export const DRAG_LEAVE = 'DRAG_LEAVE'
export const DRAG_ENTER = 'DRAG_ENTER'
export const DRAG_OVER = 'DRAG_OVER'
export const REMOVE = 'REMOVE'

let nextimgId = 0;

export function uploadImage(file, url) {
   return {
      type: UPLOAD_IMAGE,
      id: nextimgId++,
      file,
      url
   };
}

export function dragLeave(){
   return {
      type: DRAG_LEAVE
   };
}

export function dragEnter(){
   return {
      type: DRAG_ENTER
   };
}

export function drogOver(){
   return {
      type: DRAG_OVER
   };
}

export function remove(id){
   return {
      type: REMOVE,
      id
   };
}