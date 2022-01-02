import { useState } from 'react';
import styled from 'styled-components';

import Button from '../UI/Button';
import Card from '../UI/Card';

const FormContainer = styled(Card)`
  padding: 1.5rem;
`;

const FormControl = styled.div`
  margin: 0.5rem 0;
  text-align: left;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    text-align: left;
  }
`;

const NewUser = ({ onAddUser, onAddUserError }) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isValidAge, setIsValidAge] = useState(false);

  const handleAddUser = (event) => {
    event.preventDefault();
    let error;
    const userData = {
      name: userName,
      age: userAge,
    };
    if (!isValidName && !isValidAge) {
      error = {
        title: 'Invalid input',
        message: 'Please enter a valid name and age (no empty values)',
      };
      onAddUserError(error);
      return;
    }
    if (!isValidName) {
      error = {
        title: 'Invalid name',
        message: 'Please enter a valid name (2 characters or longer)',
      };
      onAddUserError(error);
      return;
    }
    if (!isValidAge) {
      error = {
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      };
      onAddUserError(error);
      return;
    }
    onAddUser(userData);
    setUserName('');
    setUserAge('');
  };

  const handleChangeName = (event) => {
    if (event.target.value.length > 1) {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }
    setUserName(event.target.value);
  };

  const handleChangeAge = (event) => {
    if (+event.target.value > 0) {
      setIsValidAge(true);
    } else {
      setIsValidAge(false);
    }
    setUserAge(event.target.value);
  };

  return (
    <FormContainer>
      <form onSubmit={handleAddUser}>
        <FormControl>
          <label>Username</label>
          <input type='text' value={userName} onChange={handleChangeName} />
        </FormControl>
        <FormControl>
          <label>Age (Years)</label>
          <input type='number' value={userAge} onChange={handleChangeAge} />
        </FormControl>
        <FormControl>
          <Button>Add User</Button>
        </FormControl>
      </form>
    </FormContainer>
  );
};

export default NewUser;
