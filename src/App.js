import { useState } from 'react';
import styled from 'styled-components';

import Modal from './components/UI/Modal';
import NewUser from './components/User/NewUser';
import UserList from './components/User/UserList';

const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  margin: 0 auto;
`;

const App = () => {
  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'Andrew',
      age: 29,
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const handleAddUser = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  const handleAddUserError = (err) => {
    setModalTitle(err.title);
    setModalMessage(err.message);
    setShowModal(true);
    return;
  };

  const handleModalClick = () => {
    setShowModal(false);
  };

  return (
    <AppContainer>
      <NewUser onAddUser={handleAddUser} onAddUserError={handleAddUserError} />
      <UserList users={users} />
      {showModal && (
        <Modal
          title={modalTitle}
          message={modalMessage}
          onClickAccept={handleModalClick}
        />
      )}
    </AppContainer>
  );
};

export default App;
