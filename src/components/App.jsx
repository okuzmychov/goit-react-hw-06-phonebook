import { GlobalStyle } from '../GlobalStyle';
import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Toaster } from 'react-hot-toast';

export function App () {
  return (
    <>
      <Container>
        <ContactForm />
        <ContactList />
        <GlobalStyle />
        <Toaster
        gutter={4}
        containerStyle={{
          top: 53,
        }}
        toastOptions={{
          duration: 3000,
          style: {
            width: '360px',
            padding: '16px',
          },
        }}
      />
      </Container>
    </>
  );
};