import { StyledWrapper, StyledLi, StyledButton } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispach = useDispatch();

  return (
    <StyledWrapper>
      {contacts
        .filter(el => el.name.toLowerCase().includes(filter))
        .map(({ id, name, number }) => (
        <StyledLi key={id}>
          <p>
            {name}: {number}
            </p>
            <StyledButton type="button" id={id} onClick={e => dispach(deleteContact(e.target.id))}>
            DELETE
          </StyledButton>
        </StyledLi>
      ))}
    </StyledWrapper>
  );
};