import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TaskDetails from '../TaskDetails'
import TaskForm from '../TaskForm'
export default function Task() {
    const [task, setTask] = useState({})
    const [showForm, setShowForm] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks/${id}`)
            .then(response => {
                console.log(response.data)
                setTask(response.data)
            })
    }, [id])

    const handleSubmit = (e, form, setForm) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_SERVER_URL}/tasks/${id}`, form)
            .then(response => {
                console.log(response.data)
                setTask(response.data)
                setShowForm(false)
            })
            .catch(console.warn)
    }
    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/tasks/${id}`)
            .then(response => {
                // navigate away from this page
                navigate('/')
            })
            .catch(console.warn)
    }
    return (
        <div>

            { showForm ? <TaskForm initialForm={task} submitHandler={handleSubmit}/> : <TaskDetails task={task}/> }
            <button onClick={() => setShowForm(!showForm)}>{showForm ? 'no' : 'edit'}</button>
            {showForm ? <button onClick={handleDelete}>dleete</button> : ''}
        </div>
    )
}
