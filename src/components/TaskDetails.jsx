export default function TaskDetails({ task }) {
    return (
        <div>
            <h2>Task: {task.item}</h2>
            <h2>Description: {task.description}</h2>
            <h2>This should take {task.time} hours</h2>
        </div>
    )
}
