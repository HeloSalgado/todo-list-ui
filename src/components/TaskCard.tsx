import React from "react";
import Tarefa from "../interfaces/Tarefa";
import "../css/TaskCard.css"
import { Trash } from "lucide-react";
import checkData from "../utils/CheckData";

interface TaskCardProps {
    tarefa: Tarefa;
}

const TaskCard: React.FC<TaskCardProps> = ({ tarefa }) => {
    const { statusColor, statusText } = checkData(tarefa.dueDate);

    return (
        <div className="card">
            <div className="textCard">
                <p>{tarefa.title}</p>
                <div className={`status ${tarefa.isCompleted ? "green" : statusColor}`}>
                    <span className="status-text">
                        {tarefa.isCompleted ? "Concluída" : statusText}
                    </span>
                </div>
            </div>
            <Trash color="black" cursor="pointer" className="trash" />
        </div >
    )
}

export default TaskCard;