import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Home() {
    // tasks from the backend
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks`)
                setTasks(response.data)
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchTasks()
    }, [])
    const taskLinks = tasks.map((task, idx) => {
        return (
            <div key={`tasklink${idx}`}>
                <Link to={`/tasks/${task._id}`}>{task.item}</Link>
            </div>
        )
    })
    return (
        <div>
            i am the home component
            {taskLinks}
        </div>
    )
}
