import { Form, Button } from 'react-bootstrap';
import shopImg from '../events/addShop';
import { useState } from 'react';

//Set Limit Text
//text here is the value... so setText is being targeted. which in return is the value of text.
const AddShop = () => {
  const [text, setText] = useState('');
  const maxLength = 300; // Set your text limit here

  const handleChange = (event) => {
    if (event.target.value.length <= maxLength) {
      setText(event.target.value);
    }
  };
  return (
    <>
      <h1>Add Shop</h1>
      <Form>
        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Label>Shop's Picture</Form.Label>
          <Form.Control type='file' />
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Shop's Name</Form.Label>
            <Form.Control type='email' placeholder='name@example.com' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Shop's Description</Form.Label>
            <Form.Control
              as='textarea'
              value={text}
              rows={3}
              onChange={handleChange}
              maxLength={maxLength}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Shop's Socials</Form.Label>
            <Form.Control as='textarea' rows={1} />
          </Form.Group>
        </Form.Group>
        <Button onClick={shopImg}>Submit</Button>
      </Form>
    </>
  );
};

export default AddShop;
