import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const Title = styled.h2`
  margin: 0 0 24px;

  font-size: 24px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  color: #19293b;
`;

export const FormStyled = styled.input`
  margin-bottom: 12px;
  padding: 8px 16px;
  width: 100%;

  border-radius: 4px;
  border: 1px solid #40bfff;

  &::placeholder {
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: #40bfff;
  }
`;

export const AddButton = styled.button`
  margin-bottom: 24px;
  padding: 10px 16px;
  display: block;
  width: 100%;

  text-align: center;
  font-size: 16px;
  text-transform: uppercase;

  color: white;

  border-radius: 4px;
  border: none;
  background-color: #40bfff;

  cursor: pointer;

  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #0099e6;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  align-items: flex-start;
  justify-content: space-between;
`;
export const ErrorMsg = styled(ErrorMessage)`
font-size: 14px;
color: red;
`;

export const StyleButton = styled(Form)`
  display: flex;
  width: 100%;
  padding: 4px;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  justify-content: center;
  background-color: ${p => p.theme.colors.lightgreen};
  cursor: pointer;
  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.green};
  }
`;
