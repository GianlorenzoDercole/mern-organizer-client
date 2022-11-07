import { useState } from 'react'




export default function TaskForm({submitHandler}) {
    const [form, setForm] = useState({
        item: '',
        description: '',
        time: 1
    })
    return (
        <form onSubmit={e => submitHandler(e, form)}>

            <label htmlFor='item'>item : </label>
            <input
                type='text'
                id='name'
                value={form.item}
                onChange={e => setForm({...form, item: e.target.value})
                }
            />

            <label htmlFor='description'>description : </label>
            <input
                type='text'
                id='description'
                value={form.description}
                onChange={e => setForm({...form, description: e.target.value})
                }
            />

            <label htmlFor='time'>time : </label>
            <input
                type='number'
                id='time'
                value={form.time}
                onChange={e => setForm({...form, time: e.target.value})
                }
            />
            <button type='submit'>update</button>
        </form>
    )
}
