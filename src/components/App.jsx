import React, { Component } from 'react';
import { Section, Filter, Contacts, NewContactForm, Container } from './index';
// import phonebook from '../data/phonebook.json';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const savedData = localStorage.getItem('contacts');
    const parsedData = JSON.parse(savedData);
    if (parsedData) {
      return this.setState({ contacts: parsedData });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const saveToLocalData = JSON.stringify(this.state.contacts);
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', saveToLocalData);
    }
  }

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This contact already exsists');
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name,
            number,
          },
        ],
      }));
    }
  };

  setFilter = filter => {
    this.setState({
      filter: filter.toLowerCase().trim(),
    });
  };

  filterContacts = () => {
    const { contacts } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter)
    );
  };

  // export const remove = key => {
  //   try {
  //     localStorage.removeItem(key);
  //   } catch (error) {
  //     console.log('Remove item error: ', error.message);
  //   }
  // };

  removeContact = idToRemove => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idToRemove),
    }));
  };
  render() {
    return (
      <Container title="Phone book">
        <Section title="Add new contact" variant="h3">
          <NewContactForm addContact={this.addContact} />
        </Section>
        <Section title="Your contacts" variant="h3">
          <Contacts
            contactsList={this.filterContacts()}
            removeContact={this.removeContact}
          >
            <Filter setFilter={this.setFilter} />
          </Contacts>
        </Section>
      </Container>
    );
  }
}

export default App;
