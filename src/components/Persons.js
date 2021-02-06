import React from 'react';
import personService from '../services/persons'
const Persons = ({persons, setPersons}) => {

    const removeNumber = (person) =>{
        let result = window.confirm(`Are you sure you want to delete ${person.name} from your phonebook?`)
        if (result == true){
            personService
            .del(person.id)
            .then(() =>{
                personService
                .getAll()
                .then((response) => {
                    setPersons(response.data)
                })
            })
        } 
        }
          

        

    return (
        <div>
            <h3>Numbers</h3>
            {persons.map((person, id) => {
            return <p key={person.id}>{person.name} - {person.number} <button onClick={() => removeNumber(person)}>Delete</button></p>
             })}
        </div>
    );
};

export default Persons;