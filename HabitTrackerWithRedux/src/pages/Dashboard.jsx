import React, { useEffect, useState } from 'react'
import HabitForm from '../components/HabitForm'
import HabitCard from '../components/HabitCard'
import ProgressCard from '../components/ProgressCard'
import FilterButtons from '../components/FilterButtons'
import { addHabit,toggleHabit,deleteHabit,CompletedCount,updateHabit, fetchHabits, createHabit, removeHabit, editHabit } from '../store/HabitsSlice'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../components/SearchBar'



function Dashboard() {

  const[habitName,setHabitName]= useState('')
  const[editingId,setEditingId] = useState(null)
  const[filter,setFilter] = useState('all')
  const[searchTerm,setSearchTerm] = useState('')



  


  const dispatch = useDispatch()
  const habits = useSelector((state)=>state.habits.habits)
  const status = useSelector((state) => state.habits.status);
  const completedCount = useSelector(CompletedCount)




  // useEffect(()=>{
  //   localStorage.setItem('habits',JSON.stringify(habits))
  // },[habits])

  // useEffect(() => {
  //   async function fetchHabits() {
  //     try {
  //       const response = await api.get('habits/')
  //       console.log(response)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchHabits();

  // }, [])

  useEffect(()=>{

     if (status === 'idle') {
      dispatch(fetchHabits());
    }
  },[dispatch,status])

  if (status === 'loading') {
    return <div className="p-6 text-center">Loading...</div>;
  }
    if (status === 'failed') {
    return <div className="p-6 text-center text-red-600">Error loading habits</div>;
  }
  


  let displayHabits = habits
  if(filter === 'completed'){
    displayHabits = habits.filter((h)=>(
      h.completion_status
    ))
  }
  if(filter === 'pending'){
    displayHabits = habits.filter((h)=>(
      !h.completion_status
    ))
  }

  if(searchTerm.trim()){
    displayHabits = displayHabits.filter((h)=>(
      h.habitName.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  }



  function handelAdd(){
    if(habitName.trim()===''){
      alert("Please Enter Valid Habit");
      return;
    }
    else{
      // dispatch(addHabit({habit:habitName,CompletionStatus:false}))
      dispatch(createHabit({
        habit_name : habitName,
        completion_status : false,
      }))
    }
    setHabitName('')
  }

  function handelUpdate(habitId){
    const HabitToChange = habits.findIndex((h)=>(
      h.id === habitId
    ))
    setHabitName(habits[HabitToChange].habit_name)
    setEditingId(habitId)
  }

  function updateChanges(){
    // dispatch(updateHabit({habit : habitName,id : editingId}))
    dispatch(editHabit({
      id : editingId,
      habit_name : habitName,
    }))
    setHabitName('')
    setEditingId(null)
  }
  return (
    <div className='p-6 max-w-4xl mx-auto space-y-6'>
      <h1>Dashboard</h1>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <FilterButtons currentFilter ={filter} onFilterChange = {setFilter}/>

      <ProgressCard
      completed = {completedCount}
      total = {habits.length}
      />
      <HabitForm 
      habitName={habitName}
      onNameChange={setHabitName}
      onSubmit={handelAdd}
      onUpdate={updateChanges}
      isEditing={editingId !== null }
      />

      <div className='space-y-3'>
        {displayHabits.map((habit)=>(
          <HabitCard
          key={habit.id}
          habit = {habit}
          onDelete={(id)=>dispatch(removeHabit(id))}
          onToggle={(habit)=>dispatch(toggleHabit(habit))}
          onEdit={handelUpdate}

          />
        ))}

        {displayHabits.length === 0 && (
          <p className="text-gray-500 text-center">No habits found</p>
        )}
      </div>
    </div>

    
  )
}

export default Dashboard
