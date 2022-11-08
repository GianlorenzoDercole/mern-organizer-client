import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TaskDetails from '../TaskDetails'
export default function Task() {
    const [task, setTask] = useState({})
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
            <TaskDetails task={task}/>
        </div>
    )
}
