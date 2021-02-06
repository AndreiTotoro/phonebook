import React from 'react';
import Input from './Input';
import personService from '../services/persons'


const Form = ({newName, newNumber, setNewName, setNewNumber, setPersons, persons}) => {

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1
      }
        if (newName == ""){
          alert("Sorry, you can't have an empty name")
          setNewName('')
              setNewNumber('')
          return
        }
        if (persons.some(item => item.name === newName) == true) {
            let result = window.confirm(`${newName} is already in the phonebook, do you want to change their number instead?`);
            let personeId = persons.find(item => item.name == newName ).id
            

            if (result == true){
              personService
              .update(personeId, personObject)
              .then((() =>{
                personService
                .getAll()
                .then((response) => {
                    setPersons(response.data)
                })
            })
                
                
              )}
            return
          }

          

            personService
            .create(personObject)
            .then(response => {
              setPersons(persons.concat(response.data))
              setNewName('')
              setNewNumber('')
    })
            
            
        }
    
    
    const handlePersonChange = (event) => {
        setNewName(event.target.value) 
      }
    
    const handleNumberChange = (event) => {
          setNewNumber(event.target.value)
    }

    return (
        <div>
             <h3>Add new number</h3>
            <form onSubmit={addPerson}>
          <Input name="name" value={newName} onChange={handlePersonChange}/>
          <Input name="number" value={newNumber} onChange={handleNumberChange}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </div>
    );
};

export default Form;