import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllUsers } from '../actions/trackerActions';
import Tracker from './Tracker';


function TrackerList(props) {
    useEffect(() =>{
        props.getAllUsers();
    }, [])




    return (
        <div>
            {props.users.map((user) =>
            (<Tracker user ={user}
                delete={props.delete}
                editTracker={props.editTracker}
                />

            ))}
            
        </div>
    )
}
function mapStateToProps(state) {
    return {
        users:state.users
    }
}
const mapDispatchToProps ={
    getAllUsers,
}
export default connect(mapStateToProps,mapDispatchToProps) (TrackerList);
