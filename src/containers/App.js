import React, { Component } from 'react'
import './App.css'
import * as contacts from "../data/Contact"
import ContactList from '../components/ContactList'
import SearchBox from "../components/SearchBox";

class App extends Component {
    constructor(){
        super()
        this.state = {
            contacts,
            searchInput: '',
            searchBy: 'VORNAME'
        }        
    }

    onSearchChange = (ev) => {
        let searchBy = 'VORNAME'
        
        if(ev.target.placeholder.includes('Company')) {
            searchBy = 'LIEFERANT'
        }

        this.setState({
            searchInput: ev.target.value,
            searchBy: searchBy
        }) 
        
    }

    render() {
        const { contacts, searchInput, searchBy } = this.state
        const filteredContacts = contacts.filter(contact => {
            if(contact[searchBy]) {
                return contact[searchBy].toLowerCase().includes(searchInput.toLowerCase())
            }else {
                return true
            }
        })
        
        const contactName = 'Search By Contact Name'
        const companyName = 'Search By Company Name'

        return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Contact List</h1>
            </header>
            
            <div className="pa3">
                <SearchBox searchBy={contactName} searchChange={this.onSearchChange}/>
                <SearchBox searchBy={companyName} searchChange={this.onSearchChange}/>
                <ContactList contacts={filteredContacts}/>
            </div>
            
        </div>
        )
    }
}

export default App
