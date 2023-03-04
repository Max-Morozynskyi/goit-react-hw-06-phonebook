import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialContacts = [
  { id: 'id-1', name: 'Bart Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Weasley', number: '443-89-12' },
  { id: 'id-3', name: 'Eric Cartman', number: '645-17-79' },
  { id: 'id-4', name: 'Porkey Pig', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    createContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          }
        }
      }
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload)
    }
  }
})

export const { createContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;