import '../css/Dashboard.css'
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from 'react-router-dom';
function Dashboard(){
    return(
        <div className="dashboardContainer page">
            <div className="dashboard">
                <div className="profileContainer">
                    <p>Hello</p>
                    <p className='userName'>naveengitboi</p>
                    <p>X semester</p>
                </div>
                <div className="operationsContainer">
                    <div className="operation">
                        <NavLink to='/db/attendance'>Attendance
                            <div className="dashboardIcons">
                                <IoMdArrowDropright />
                            </div></NavLink>
                       
                    </div>

                    <div className="operation">
                        <NavLink to='/learnings'>Learnings
                            <div className="dashboardIcons">
                                <IoMdArrowDropright />
                            </div>
                        </NavLink>

                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Dashboard;