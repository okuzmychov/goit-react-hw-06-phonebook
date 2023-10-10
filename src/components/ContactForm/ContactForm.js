import { FormStyled, LabelSt, ErrorMsg } from './ContactForm.styled';
import { Formik, Field } from 'formik';
import { ButtonSubmit } from 'components/Section/Section.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    'Name may contain only letters, apostrophe, dash and spaces')
    .required('Required'),
    number: Yup.string().length(13, `Number must have 13 symbol`).matches(
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
)
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispach = useDispatch();

  const onSubmit = contact => {
    if (
      contacts.some(
        el => el.name === contact.name || el.number === contact.number
      )
    )
      return;
    dispach(addContact(contact));
  };

  return (
    <>
    <Formik
      initialValues={{
        name: '',
        number: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <FormStyled>
            <LabelSt htmlFor="name">Name</LabelSt>
            <Field id="name" name="name" placeholder="Oleg" />
            <ErrorMsg name="name" component="div" />

          <LabelSt htmlFor="number">Number</LabelSt>
            <Field id="number" name="number" type="tel" placeholder="+380501234567" />
            <ErrorMsg name="number" component="div" />

          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
          </FormStyled>
      </Formik>
      </>
    );
};
