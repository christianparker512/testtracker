import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

const App = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Doctors Appt',
                day: 'feb 5th, 2:30pm',
                reminder: true,
            },
            {
                id: 2,
                text: 'haircut Appt',
                day: 'feb 6th, 1:30pm',
                reminder: true,
            },
            {
                id: 3,
                text: 'vet Appt',
                day: 'feb 7th, 7:30am',
                reminder: false,
            },
        ])
        //Delete Task
        const deleteTask = (id) =>{
        setTasks(tasks.filter((task)=> task.id!==id))
        // console.log('delete', id)
        }
        //Toggle Reminder


    return (
        <div className='container'>
            <Header />
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete=
                {deleteTask} />
            ): (
            'No Tasks Left to Do'
            )}
        </div>
    )
}

export default App