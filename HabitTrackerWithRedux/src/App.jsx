import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addHabit,toggleHabit,deleteHabit,CompletedCount,updateHabit } from './store/HabitsSlice'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Statistics from './pages/Statistics'
import About from './pages/About'
import Navbar from "./components/Navbar";


function App() {
  const[habit,setHabit]=useState('')
  const[filter,setFilter] = useState('all')


  const dispatch = useDispatch()
  const habits = useSelector((state)=>state.habits.habits)
  const completedCount = useSelector(CompletedCount)
  const[editingIndex,setEditingIndex] = useState(null)
  
  // function handelAdd(){

  //   if(habit.trim()===''){
  //     alert('Please enter a habit')
      
  //   }
  //   else {
  //   dispatch(addHabit({habit,CompletionStatus : false}))
  //   setHabit('')
  // }}
  // function handelUpdate(habitId){
  // const indexToUpdate = habits.findIndex((habit)=>(
  //   habit.id === habitId
  // ))

  //   setHabit(habits[indexToUpdate].habitName)
  //   setEditingIndex(habitId)
  // }


  function updateChanges(){
    dispatch(updateHabit({habit,id:editingIndex}))
    setHabit('')
    setEditingIndex(null)
  }


//  let filteredHabits = habits;

// if (filter === "completed") {
//   filteredHabits = habits.filter(
//     habit => habit.CompletionStatus
//   );
// }

// if (filter === "pending") {
//   filteredHabits = habits.filter(
//     habit => !habit.CompletionStatus
//   );
// }
  
  // const filterHabits = ()=>{
  //   if(filter === 'all'){
  //     return habits
  //   }

  //   else if(filter === 'pending'){
  //     return habits.filter((habit)=>(
  //       habit.CompletionStatus !== true
  //     ))
  //   }
  //   else if(filter === 'completed'){
  //     return habits.filter((habit)=>(
  //       habit.CompletionStatus === true
  //     ))
  //   }
  // }


  // useEffect(()=>{
  //   localStorage.setItem('habits',JSON.stringify(habits))
  // },[habits])

  // function StoreData(){
  //   localStorage.setItem('habits',JSON.stringify(habits))
  // }

  return (

    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/statistics' element={<Statistics/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>




    {/* <div>
      <div>
      <div>
        <button
        onClick={()=>setFilter('all')}
        >All</button>
        <button
        onClick={()=>setFilter('pending')}>Pending</button>
        <button
        onClick={()=>setFilter('completed')}
        >Completed</button>
      </div> */}

        {/* <div className="div"><p>{`Completed: ${completedCount}/${habits.length}`}</p></div> */}
        {/* <label>Habit : </label>
        <input type="text"
        placeholder='Enter your habit'
        value={habit}
        onChange={(e)=>setHabit(e.currentTarget.value)}
        /> */}

        <br/>

        {/* {editingIndex === null ? (<button onClick={handelAdd}>Add</button>):
         (<button onClick={updateChanges}>update</button>) }
       */}

        <div >
          
          {/* {filteredHabits.map((habit,index)=>(
            <div key={habit.id}>
              <p>{`Habits: ${habit.habitName}`}</p>

              <input type="checkbox"
              checked={habit.CompletionStatus}
              onChange={()=>dispatch(toggleHabit(habit.id))}
              />

              <div>
                <button onClick={() => dispatch(deleteHabit(habit.id))}>Delete</button><br/>
                <button onClick={()=>handelUpdate(habit.id)}>Edit</button>
              </div>

            </div>
          ))} */}
        {/* </div>

        
      {/* </div>

      <div>
        {}
      </div>

      {/* <div>
        <br/>

        <button
        onClick={StoreData}
        >Save</button>
      </div> */}
    </div>  
  

  </>
  )
}

export default App
