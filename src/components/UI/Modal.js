import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Card from './Card';
import Button from './Button';
import CardHeading from './CardHeading';

const StyledBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const StyledPopUp = styled.div`
  width: 50%;
  margin: 0 auto;
  z-index: 100;
`;

const StyledCard = styled(Card)`
  z-index: 1;
  padding-top: 0;
`;

const StyledCardBody = styled.div`
  padding: 1.5rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem;
`;

const Backdrop = ({ title, message, handleClick }) => {
  return (
    <StyledBackground onClick={handleClick}>
      <StyledPopUp>
        <StyledCard>
          <CardHeading>
            <h2>{title}</h2>
          </CardHeading>
          <StyledCardBody>{message}</StyledCardBody>
          <StyledButtonContainer>
            <Button type='button' onClick={handleClick}>
              Okay
            </Button>
          </StyledButtonContainer>
        </StyledCard>
      </StyledPopUp>
    </StyledBackground>
  );
};

const Modal = ({ title, message, onClickAccept }) => {
  const handleClick = () => {
    onClickAccept();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop title={title} message={message} handleClick={handleClick} />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default Modal;
