import { StyledWrapper, StyledLi, StyledButton } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { formatContactNumber } from 'utils/formatContactNumber';
// import { getContacts, getFilter } from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contactsList);
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

   const getContacts = () => {
    let normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {contacts.length > 0 ? (
        <>
          <Filter />
        <StyledWrapper>
        {getContacts().map(contact => {
              return (
              <StyledLi key={contact.id}>
              <p>
              {contact.name}: {formatContactNumber(contact.number)}
              </p>
              <StyledButton type="button" onClick={() => dispatch(deleteContact(contact.id))}>
              DELETE
              </StyledButton>
              </StyledLi>
                );
            })}
          </StyledWrapper>
          </>
      ) : (
        <p>No contacts in phone book</p>
      )}
      </>
  );
};