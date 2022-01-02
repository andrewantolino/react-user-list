import styled from 'styled-components';

import User from './User';
import Card from '../UI/Card';

const ListContainer = styled(Card)`
  padding: 1.5rem;
`;

const StyledUserListItem = styled.li`
  list-style: none;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 5px 0;
`;

const UserList = ({ users }) => {
  return (
    <ListContainer>
      <ul
        style={{
          padding: '0',
          margin: '0',
        }}
      >
        {users.map((user, index) => (
          <StyledUserListItem key={index}>
            <User name={user.name} age={user.age} />
          </StyledUserListItem>
        ))}
      </ul>
    </ListContainer>
  );
};

export default UserList;
