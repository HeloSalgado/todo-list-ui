import React, { Dispatch, SetStateAction } from "react";
import "../css/AddTask.css";

interface AddModalProps {
    setModal: Dispatch<SetStateAction<number | null>>;
}

const AddTask:React.FC<AddModalProps> = ({setModal}) => {
    return (
        <form>
            <div className="inputWrapper">
                <input
                    type="text"
                    className="inputTask"
                    placeholder="Adicione sua tarefa"
                    maxLength={40} required/>
                <button className="btnAdd" type="button" onClick={() => setModal(0)}>+</button>
            </div>
        </form>
    )
}

export default AddTask;