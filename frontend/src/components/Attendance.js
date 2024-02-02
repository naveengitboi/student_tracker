import { NavLink, Outlet } from "react-router-dom";
import '../css/Attendance.css'
import Subject from "../items/Subject";
    let subjects = [
    {
        subject:"Maths",
        semester:6,
        subjectType: "core",
        totalClasses: 20,
        present:15,
        absent:5,   
    },
    {
        subject: "Automobile Engr",
        semester: 6,
        subjectType: "core",
        totalClasses: 20,
        present: 15,
        absent: 5,
    },
    {
        subject: "Vehicle dynamics",
        semester: 6,
        subjectType: "core",
        totalClasses: 20,
        present: 15,
        absent: 5,
    },

]

function Attendance(){
    return(
        <>
            <div className="page">
                <div className="subjectsContainer">
                    {
                        subjects.map((item) => (
                            <NavLink key={item.subject} to={`${item.subject}`}><Subject item={item} /></NavLink>
                        ))
                    }
                </div>
                
                <NavLink to='addsubject' className={'clickButton'}>Add Subjects</NavLink>
            </div>

            <Outlet/>
        </>
    )
}

export default Attendance;