import { useState } from 'react'
import './css/App.css'
import TabsComponent from './components/TabsComponent'
import AddTask from './components/AddTask';
import TaskCard from './components/TaskCard';

const dadosMockados = [
  {
    id: 1,
    title: "Codar",
    description: "Projeto em React",
    isCompleted: false,
    dueDate: "2024-12-13",
    createdAt: "2024-12-10"
  },
  {
    id: 2,
    title: "Fazer exercicios",
    description: "Chloe Ting",
    isCompleted: true,
    dueDate: "2024-12-15",
    createdAt: "2024-12-10"
  },
  {
    id: 3,
    title: "Codar",
    description: "Projeto em C#",
    isCompleted: false,
    dueDate: "2024-12-22",
    createdAt: "2024-12-01"
  },
  {
    id: 4,
    title: "Codar",
    description: "Projeto em React",
    isCompleted: false,
    dueDate: "2024-12-10",
    createdAt: "2024-12-10"
  },
  {
    id: 5,
    title: "Fazer exercicios",
    description: "Chloe Ting",
    isCompleted: false,
    dueDate: "2024-12-15",
    createdAt: "2024-12-10"
  },
]


function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      <div className='retangulo'>
        <div className='titleTabs'>
          <h2 className='title'>ToDo List</h2>
          <TabsComponent activeTabIndex={activeTabIndex} onTabClick={setActiveTabIndex} />
        </div>
        <AddTask />
        <div className='taskList'>
          {dadosMockados.map((tarefa, index) => (
            <TaskCard key={index} tarefa={tarefa} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
