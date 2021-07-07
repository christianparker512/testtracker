import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])
        //add task
    const addTask = (task) => {
        // console.log(task);
        const id = Math.floor(Math.random() * 1000) +1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }
        //Delete Task
        const deleteTask = (id) =>{
        setTasks(tasks.filter((task)=> task.id!==id))
        // console.log('delete', id)
        }
        //Toggle Reminder
        const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id
        ? {...task, reminder: !task.reminder} : task))
        // console.log(id)
        }

    return (
        <div className='container'>
            <Header onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}/>
            {showAddTask &&<AddTask onAdd = {addTask}/>}
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete=
                {deleteTask}
                onToggle={{toggleReminder}}/>
            ): (
            'No Tasks Left to Do'
            )}
        </div>
    )
}

export default App