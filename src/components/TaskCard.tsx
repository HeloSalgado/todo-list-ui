import React, { Dispatch, SetStateAction, useState } from "react";
import Tarefa from "../interfaces/Tarefa";
import "../css/TaskCard.css"
import { PenBox, Trash } from "lucide-react";
import checkData from "../utils/checkData";
import Tooltip from '@mui/material/Tooltip';

interface TaskCardProps {
    tarefa: Tarefa;
    setModal: Dispatch<SetStateAction<number | null>>;
}

const TaskCard: React.FC<TaskCardProps> = ({ tarefa, setModal }) => {
    const { statusColor, statusText } = checkData(tarefa.dueDate);
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="card" onClick={toggleAccordion}>
            <div className="textCard">
                <div className="text-basic">
                    <p>{tarefa.title}</p>
                    <div className={`status ${tarefa.isCompleted ? "green" : statusColor}`}>
                        <span className="status-text">
                            {tarefa.isCompleted ? "Concluída" : statusText}
                        </span>
                    </div>
                    <div className="action-group">
                        <Tooltip title="Editar">
                            <PenBox color="black" cursor="pointer" onClick={() => setModal(1)} />
                        </Tooltip>
                        <Tooltip title="Deletar">
                            <Trash color="black" cursor="pointer" className="trash" />
                        </Tooltip>
                    </div>
                </div>
                {isOpen && (
                    <p className="text-description">{tarefa.description}</p>
                )}
            </div>

        </div >
    )
}

export default TaskCard;