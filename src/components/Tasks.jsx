import { ChevronRightIcon, TrashIcon, CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams()

        query.set("title", task.title)

        query.set("description", task.description)

        navigate(`/task?${query.toString()}`);
    }

    return (
        <ul className="space-y-4 p-6 bg-fuchsia-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                    onClick={() => onTaskClick(task.id)}
                    className={`bg-fuchsia-400 w-full text-fuchsia-900 p-2 flex itens-center gap-2 rounded-md text-left ${task.isCompleted && 'Line-throught'}`}>
                        {task.isCompleted && <CheckIcon />}
                        {task.title}
                    </button>

                    <Button onClick={() => onSeeDetailsClick(task)}>
                        <ChevronRightIcon />
                    </Button>

                    <Button onClick={() => onDeleteTaskClick(task.id)}>
                        <TrashIcon />
                    </Button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks;