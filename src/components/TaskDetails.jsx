export default function TaskDetails({ task }) {
    return (
        <div>
            <h1>{task.item}</h1>
            <h2>{task.description}</h2>
            {task.time > 1 ? <h1>this should take {task.time} hours</h1> : <h1>this should take {task.time} hour</h1>}

        </div>
    )
}
