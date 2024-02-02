import React from 'react'
import '../css/SingleSubjectInfo.css'

function SingleSubjectInfo() {
    return (
        <div className='page subjectContainer'>
            <div className="sqaredContainer">
                <div className="subjectContent">
                    <h1 className='mainFont'>
                        Maths
                    </h1>
                    <p>X semester</p>
                </div>

                <div className="attendanceStatus">
                    <p>GOOD</p>
                    <p>I</p>
                </div>
            </div>

            <div className="actionBtns">
                <button className='clickButton successBtn'>Present</button>
                <button className='clickButton dangerBtn'>Absent</button>
            </div>
        </div>
    )
}

export default SingleSubjectInfo