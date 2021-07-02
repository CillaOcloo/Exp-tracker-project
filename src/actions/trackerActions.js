import React from 'react'
import { getFirestore } from 'redux-firestore';

export function getAllUsers() {
    return (dispatch, state,{ getFirestore})=>{
        const db =getFirestore()
            db.collection ('users').onSnapshot(
            
                (results) => {
                let users =[];
                results.forEach((doc) => {
                    users.push({...doc.data(), id:doc.id});
                });
                dispatch({
                    type: 'ADD_ALL_USERS',
                    payload:users,
                });
            },
             (error)=> {
                console.log(error)
             });
         
    };
}
  export function addUser(newUser) { 
      return async (dispatch, state, {getFirestore}) =>{
          const db = getFirestore();
          try {
              await db.collection('users').add(newUser);
              
          } catch (error) {
              console.log(error)
              
          }
      }

//   return {
//       type: "ADD_USER",
//       payload: newUser
//   }

}


export function deleteTracker(id) {
    return async (dispatch, state, {getFirestore})=>{
        const db = getFirestore();
        try {
            await db.collection ('users').doc(id).delete();
            
        } catch (error) {
            console.log(error)
            
        }

    }
    // return{
    //     type: "DELETE_USER",
    //     payload: id,
    // }
}
export function editTracker(id, updatedUser) {
    return async (dispatch, state, {getFirestore}) =>{
        const db = getFirestore();
        try {
            await db.collection('users').doc(id).update(updatedUser)  
        } catch (error) {
            console.log(error)
            
        }
       
    }
    // return {
    //     type: "EDIT_USER",
    //     payload: {id: id,updatedUserInfo: updatedUser}
    // }
}
export default addUser;
