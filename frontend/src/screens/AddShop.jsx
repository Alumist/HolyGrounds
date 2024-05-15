import { Form } from 'react-bootstrap';

const AddShop = () => {
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
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddShop;
