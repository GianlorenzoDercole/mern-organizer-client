import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TaskDetails from '../TaskDetails'
export default function Task() {
    const [task, setTask] = useState({})
    const [showForm, setShowForm] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks/${id}`)
            .then(response => {
                console.log(response.data)
                setTask(response.data)
            })
    }, [id])
    return (
        <div>
            task hi component {id}
            { showForm ? 'form' : <TaskDetails task={task}/> }
            <button onClick={() => setShowForm(!showForm)}>{showForm ? 'no' : 'edit'}</button>
        </div>
    )
}
