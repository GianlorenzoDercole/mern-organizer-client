import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import TaskForm from '../TaskForm'
export default function Home() {
    // tasks from the backend
    const [tasks, setTasks] = useState([])
    // // controlled form state
    // const [form, setForm] = useState({})
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
    }, []) // get all tasks when the page loads

    // submit handler function
    const handleSubmit = async (e, form, setForm) => {
        e.preventDefault()
        // axios to POST a task using the form state
        console.log('the form data is', form)
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/tasks`, form)

            setTasks([...tasks, response.data])

            setForm({
                item: '',
                description: '',
                time: 1
            })
        } catch (err) {
            console.log(err)
        }
    }
    // // from change handler function
    // const handleFormChange = e => {

    // }

    const taskLinks = tasks.map((task, idx) => {
        return (
            <div key={`tasklink${idx}`}>
                <Link to={`/tasks/${task._id}`}>{task.item}</Link>
            </div>
        )
    })
    return (
        <div>
            <h1>create new task</h1>
            <TaskForm
                submitHandler={handleSubmit}
                initialForm={{
                    item: '',
                    description: '',
                    time: 1
                }}
            />
            {taskLinks}
        </div>
    )
}
