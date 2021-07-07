import {useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async() => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
            // console.log(data)
            getTasks()
    }, [])

    //Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }
        //add task
    const addTask = async(task) => {
        // console.log(task);
        // const id = Math.floor(Math.random() * 1000) +1
        // const newTask = {id, ...task}
        // setTasks([...tasks, newTask])
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const data=await res.json()
        setTasks([...tasks,data])
    }
        //Delete Task
        const deleteTask = async (id) =>{
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })
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