import  { useState } from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import TrackerForm from '../Components/TrackerForm';
import TrackerList from '../Components/TrackerList';




 function dashboard(props) {
   function handleLogout() {
     props.logout();

   }
    return (
        <div>
            <div className="container">
                <div className="row">
                  <div className="col-md-6">
                     <TrackerForm />
                     <button type="button" style={{backgroundColor:'red',color:'black'}} onClick={handleLogout}>Logout</button> 
                  </div>

                  <div className="container">
                       <div className="row">
                         <div className="col-md-6">
                       <TrackerList />
                   </div>

                </div>

             </div>

         </div>

     </div>
            
  </div>
 );
}
const  mapDispatchToProps = {logout};
export default connect(null, mapDispatchToProps ) (dashboard);
