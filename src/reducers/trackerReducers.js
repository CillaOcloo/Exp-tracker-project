const initialState = {
    users:[]
};
const trackerReducers =(state=initialState,action)=> {
    switch(action.type){
        case 'ADD_ALL_USERS':
            let users = action.payload;
            return { users: users};

        case "ADD_USER":
            console.log(action.payload)
            return {...state,users:[...state.users,action.payload]};
        
        case "EDIT_USER":
            var id=action.payload.id;
            let updatedUserInfo=action.payload.updatedUserInfo;
            let usersAfterUpdate= state.users.map((user)=> {
                if (user.id === id){
                    return updatedUserInfo;
                }
                return user;
                console.log("usersAfterUpdate")
            });
            return { users: usersAfterUpdate};

        case "DELETE_USER":
            var id =action.payload;
            var newUsers=state.users.filter((user)=>user.id !== id)
            return{
                users:newUsers
            }
            default:
                return state;
    }
}
export default trackerReducers;