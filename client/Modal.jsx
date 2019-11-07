import React, { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { StoreContext } from './Store.jsx';
import parse from 'html-react-parser';
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'

const CenteredModal = props => {
  const [Store, setStore] = useContext(StoreContext);
  const [icon, setIcon] = useState(true);

  const addFav = (id) => {
    const job_ID = id;
    setStore({
      ...Store,
      job_ID
    })
    console.log(Store)
  }
  const changeIcon = () => {
    const bool = icon
    setIcon(!bool);
  }

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
        <Button onClick={()=> {
          addFav(props.id) 
          changeIcon()
        }}
          variant='none'
          id="favoriteButton">
            { icon ? <IoIosStarOutline id="star"/> : <IoIosStar id="star"/>}
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
