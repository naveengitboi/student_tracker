import { useState } from 'react';
import '../css/AddSubject.css'

function AddSubject(){
    const [succes, setSuccess] = useState(false)
    const [subjectdata, setSubjectdata] = useState({
        subject: '',
        minPercentageRequired: '',
        semester: '',
        courseType: ''
    })

    const checkValidation = (data) => {
        if(data.subject.trim() == ''){
            return false
        }
        else if(parseInt(data.semester)<=0){
            return false
        }
        else if(!isNaN(data.courseType)){
            return false
        }
        return true

    }

    const handleAddSubject = (e) => {
        e.preventDefault()
        console.log(subjectdata)
        const isVerified = checkValidation(subjectdata);
        if(isVerified) {
            console.log('Data is valid to add')
        }
    }

    return(
        <div className=" page">
            <form action="" className='addSubjectForm'>
                <input type="text" placeholder='subject name' onChange={(e) => setSubjectdata((prev) => ({...prev, subject:e.target.value}))} />
                <input type="number" min={'10'} max={'100'} placeholder='Min Percentage required' onChange={(e) => setSubjectdata((prev) => ({ ...prev, minPercentageRequired: e.target.value }))} />
                <input type="text" placeholder='x semester' onChange={(e) => setSubjectdata((prev) => ({ ...prev, semester: e.target.value }))} />
                <input type="text" placeholder='course type' onChange={(e) => setSubjectdata((prev) => ({ ...prev, courseType: e.target.value }))} />
                <button className='inputButton' onClick={(e) => handleAddSubject(e)} >
                    {succes ? "Done" : "Submit"}
                </button>
            </form>
        </div>
    )
}

export default AddSubject;