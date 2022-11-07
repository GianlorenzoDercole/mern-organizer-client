import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {

    useEffect(() => {
        const fetchTasks = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/tasks`)
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchTasks()
    }, [])
    return (
        <div>
            i am the home component
        </div>
    )
}
