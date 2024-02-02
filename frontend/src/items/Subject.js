import React from 'react'
function Subject(props) {
    const {item} = props
  return (
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
  )
}

export default Subject