import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { StoreContext } from './Store.jsx';
import parse from 'html-react-parser';

const CenteredModal = props => {
  const [Store, setStore] = useContext(StoreContext);
  // const [color, setColor] = React.useState(null);

  const addFav = id => {
    setStore({
      ...Store,
      job_ID: id
    });
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {props.title}
        </Modal.Title>
        <Button
          variant='outlined-secondary'
          onClick={() => addFav(props.id)}
          id='favoriteButton'
        >
          <img
            id='star'
            src='http://pluspng.com/img-png/png-star-black-and-white-star-black-and-white-shooting-star-clip-art-black-and-white-free-1979.png'
          ></img>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.company}</h4>
        <h6>{props.location}</h6>
        <p>{parse(`${props.summary}`)}</p>
      </Modal.Body>
      <Modal.Footer>
        <p id='postDate'>Posted: {props.posted}</p>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CenteredModal;
