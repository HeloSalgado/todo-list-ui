import "../css/AddTask.css";

const AddTask = () => {
    return (
        <div className="inputWrapper">
            <input
                type="text" 
                className="inputTask" 
                placeholder="Adicione sua tarefa"
                maxLength={40} />
            <button className="btnAdd">+</button>
        </div>
    )
}

export default AddTask;