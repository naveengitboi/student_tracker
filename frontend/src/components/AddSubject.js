import '../css/AddSubject.css'

function AddSubject(){


    return(
        <div className=" page">
            <form action="" className='addSubjectForm'>
                <input type="text" placeholder='subject name' />
                <input type="number" min={'10'} max={'100'} placeholder='Min Percentage required' />
                <input type="text" placeholder='x semester' />
                <input type="text" placeholder='course type' />
                <button className='inputButton' >DONE</button>
            </form>
        </div>
    )
}

export default AddSubject;