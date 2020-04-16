export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'
export const DRAG_LEAVE = 'DRAG_LEAVE'
export const DRAGS = 'DRAGS'
export const ON_DROP = 'ON_DROP'
export const DROP = 'DROP'
export const FILES = 'FILES'


let nextimgId = 0;

export function uploadImage(img) {
   return {
      type: UPLOAD_IMAGE,
      id: nextimgId++,
      img
   };
}

export function dragLeaveAction(){
   return {
      type: DRAG_LEAVE,
      id: nextimgId++
   };
}

export function dragsAction(){
   return {
      type: DRAGS,
      id: nextimgId++
   };
}

export function onDropAction(){
   return {
      type: ON_DROP,
      id: nextimgId++
   };
}

export function dropAction(){
   return {
      type: DROP,
      id: nextimgId++
   };
}

export function handleFilesAction(){
   return {
      type: FILES,
      id: nextimgId++
   };
}