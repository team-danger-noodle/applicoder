import React from 'react';
import { Card, Button } from 'react-bootstrap';
import CenteredModal from './Modal.jsx';

const SearchResult = props => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        id='jobListing'
        className='bg-dark'
        onClick={() => setModalShow(true)}
      >
        <Card
          className='listingDeets'
          bg='info'
          style={{ width: '100%', height: '100%' }}
        >
          <Card.Header as='h4'>{props.title}</Card.Header>
          <Card.Body>
            <Card.Title className='compAndLoc'>
              {props.company} - {props.location}
            </Card.Title>
            {/* <Card.Text>{props.summary}</Card.Text> */}
          </Card.Body>
          <Card.Footer className='text-muted' text='white'>
            Posted: {props.posted}
          </Card.Footer>
        </Card>
      </Button>
      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={props.title}
        company={props.company}
        location={props.location}
        posted={props.posted}
        summary={props.summary}
        url={props.url}
        page={props.page}
        id={props.id}
      />
    </>
  );
};

export default SearchResult;
