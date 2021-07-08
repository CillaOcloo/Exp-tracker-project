import  { useState } from 'react'
import TrackerForm from '../Components/TrackerForm';
import TrackerList from '../Components/TrackerList';



 function dashboard() {
    return (
        <div>
            <div className="container">
                <div className="row">
                  <div className="col-md-6">
                     <TrackerForm />
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
export default dashboard;
