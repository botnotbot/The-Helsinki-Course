import React, {useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [filteredPersons, setFilteredPersons] = useState(persons)

  const addName = (event) => { 
    event.preventDefault()
    console.log(event.target)
    const nameObject = { 
      name: newName,
      number: newNumber,
    }

      if(persons.some(item=> item.name === newName)) {alert(`${newName} is already in ya book, bro!`)}
      else{

  setPersons(persons.concat(nameObject))
  setFilteredPersons(filteredPersons.concat(nameObject))
  }}

  const handleNameChange = (event) => { 
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => { 
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    if(persons.some(item => item.name === event.target.value)){
      setFilteredPersons(filteredPersons.filter(item => item.name === event.target.value))
    }
    else{ 
      setFilteredPersons(persons)
    }
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <>
      filter your list:
         <input 
        onChange = {handleSearch}
          />
      </> 
      
      <form  onSubmit = {addName}>

        <div>
          name: 
          <input 
            value = {newName}
            onChange = {handleNameChange}
          />
        </div>

        <div>
          number:
          <input 
            value = {newNumber} 
            onChange = {handleNumberChange}/>
        </div>

        <div>
          <button type="submit">
          Add
          </button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul> 
        {filteredPersons.map(person => <li key={person.name}> {person.name} {person.number}</li>)}
      </ul> 
    </div>
  )
}

export default App
