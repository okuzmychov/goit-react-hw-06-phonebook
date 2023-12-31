import {
  Title,
  FormStyled,
  AddButton,
  ErrorMsg,
} from './ContactForm.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import toast from 'react-hot-toast';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash, and spaces'
    )
    .required('Required'),
  number: Yup.string()
    .length(13, 'Number must have 13 symbols')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must consist of digits and can contain spaces, dashes, parentheses, and can start with +'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts.contactsList);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = (data) => {
    const { name, number } = data;

    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      toast.error('Contact with the same name or number already exists', {
        style: {
          background: '#ffd500',
        },
      });
    } else {
      toast.success(`${name} is added to contacts`, {
        style: {
          color: 'white',
          background: '#5cc400',
        },
      });
      dispatch(addContact(name, number));
      reset();
    }
  };

  return (
    <>
      <Title>Phone Book</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormStyled
          type="text"
          {...register('name')}
          placeholder="Full Name (Example: Oleh Kuzmychov)"
        />
        {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}

        <FormStyled
          type="tel"
          {...register('number')}
          placeholder="Phone number (Example: +30501112233)"
        />
        {errors.number && <ErrorMsg>{errors.number.message}</ErrorMsg>}

        <AddButton type="submit">Add contact</AddButton>
      </form>
    </>
  );
};
