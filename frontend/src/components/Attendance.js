import { NavLink } from "react-router-dom";
import '../css/Attendance.css'
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

                            <div className="subject">
                                <div className="subjectInfo">
                                    <h1>{item.subject}</h1>
                                    <p>{item.semester} semester</p>
                                    <p>{item.subjectType}</p>
                                </div>
                                <div className="subjectAttendance">
                                    <h1>{item.present}/{item.totalClasses}</h1>
                                </div>
                            </div>

                        ))
                    }
                </div>
                
                <NavLink to='/addsubject' className={'clickButton'}>Add Subjects</NavLink>
            </div>
        </>
    )
}

export default Attendance;