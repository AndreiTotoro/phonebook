import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Search from './components/Search'
import Form from './components/Form'
import personService from './services/persons'



const App = () => {
  const [persons, setPersons ] = useState(['']) 
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber ] = useState('')
  const [searchValue, changeSearch ] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then((response) => {
        setPersons(response.data)
    })
}, [])


  return (
    <div>
      <h1>Phonebook</h1>
      <Search searchValue={searchValue} changeSearch={changeSearch}/>
      <Form newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber ={setNewNumber} persons={persons} setPersons={setPersons}/>
      <Persons persons={persons} setPersons={setPersons}/>
    </div>
  )
}



export default App