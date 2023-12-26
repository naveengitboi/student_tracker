import '../css/Dashboard.css'
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from 'react-router-dom';
function Dashboard(){
    return(
        <div className="dashboardContainer">
            <div className="dashboard">
                <div className="profileContainer">
                    <p>Hello</p>
                    <p className='userName'>naveengitboi</p>
                    <p>X semester</p>
                </div>
                <div className="operationsContainer">
                    <div className="operation">
                        <NavLink to='/attendance'>Attendance</NavLink>
                        <div className="dashboardIcons">
                            <IoMdArrowDropright/>
                        </div>
                    </div>

                    <div className="operation">
                        <NavLink to='/learnings'>Learnings</NavLink>

                        <div className="dashboardIcons">
                            <IoMdArrowDropright />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Dashboard;