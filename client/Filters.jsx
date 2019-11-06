import React, { useContext } from 'react';
import { StoreContext } from './Store.jsx';
import { Form, FormCheck, FormControl, Row, Col, Button } from 'react-bootstrap';

const Filters = () => {
  const [Store, setStore] = useContext(StoreContext);
  let keywordSearch;
  let locationSearch;
  let radius;

  const keywords = (e) => {
    keywordSearch = e.target.value;
    console.log(keywordSearch)
  }
  const locationQuery = (e) => {
    locationSearch = e.target.value;
    console.log(locationSearch)
  }
  const distance = (e) => {
    radius = e.target.value
    console.log(radius)
  }
  const filter = (e) => {
    e.preventDefault()
    console.log('is this working', keywordSearch, locationSearch, radius)
    setStore({
      ...Store,
      keywordSearch,
      locationSearch,
      radius
    })
  }

  return (
    <div id="filterContainer">
      <Form id="filterOptions">
        <Form.Group controlId="formKeyword">
          <Form.Label sm={2}>Keyword Search</Form.Label>
          <Col sm={12}>
            <Form.Control type="keyword" placeholder="ex: software developer" onChange={(e)=>keywords(e)}/>
          </Col>
        </Form.Group>
        <Form.Group controlId="formLocation">
          <Form.Label sm={2}>Location Search</Form.Label>
          <Col sm={12}>
            <Form.Control type="location" placeholder="ex: Los Angeles, CA" onChange={(e)=>locationQuery(e)}/>
          </Col>
        </Form.Group>
        <fieldset>
        <Form.Group as={Row} id="buttons" onChange={(e)=> distance(e)}>
          <Form.Label as="legend" sm={2} >Search Radius (miles)</Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="25 miles"
              name="formHorizontalRadios"
              value="25"
              id="25miles"
            />
            <Form.Check
              type="radio"
              label="50 miles"
              name="formHorizontalRadios"
              value="50"
              id="50miles"
            />
            <Form.Check
              type="radio"
              label="100 miles"
              name="formHorizontalRadios"
              value="100"
              id="100miles"
            />
            <Form.Check
              type="radio"
              label="100+ miles"
              name="formHorizontalRadios"
              value="100+"
              id="over100miles"
            />
          </Col>
          <Row/>
        </Form.Group>
        </fieldset>
        <Form.Group as={Row}>
          <Col lg={{ span: 12 }}>
            <Button variant="info" type="submit" id="submit" onClick={(val)=> filter(val)}>Search</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Filters;