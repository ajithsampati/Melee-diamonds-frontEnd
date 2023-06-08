
import React from 'react';
import  {useState} from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
function App() {
  const useStyles = () => ({})
  
    const classes = useStyles()

  const [formData, setFormData] = useState([
    {
      description: '',
      size: 0,
      cost: 0,
      quantity: 0,
      total: 0,
      tax: 0,
      lab:0,
    },
  ])

  const handleinput = (e, index) => {
    const { name, value } = e.target
    const list = [...formData]
    list[index][name] = value
    setFormData(list)
  }

  // const handleremove = (index) => {
  //   const list = [...formData]
  //   list.splice(index, 1)
  //   setFormData(list)
  // }

  // const handleaddclick = (e) => {
  //   e.preventDefault()
  //   setFormData([
  //     ...formData,
  //     {
  //       description: '',
  //       size:0,
  //       cost: 0,
  //       quantity: 0,
  //       total: 0,
  //       tax: 0,
  //       lab:0,
  //     },
  //   ])
  // }

  const handletotal = () => {
    const total = formData.reduce((acc, curr) => {
      return acc + Number(curr.cost) + Number(curr.lab) * Number(curr.quantity)
    }, 0)
    return total
  }

   console.log(formData)

  // calculate each item's subtotal and carat

  return (
    <div>
      <Form>
        {formData.map((item, index) => (
          <>
            <Container>
              <Row className='mt-12' key={index}>
                <Col>
                  <Form.Group>
                    <Form.Label>Category</Form.Label><br />
                    <Form.Control
                      type='text'
                      placeholder='Enter Category name'
                      name='description'
                      onChange={(e) => handleinput(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Diamond Type</Form.Label><br />
                    <Form.Control
                      type='text'
                      placeholder='Enter diamond name'
                      name='description'
                      onChange={(e) => handleinput(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Size</Form.Label><br />
                    <Form.Control
                      type='number'
                      placeholder='Enter size mm'
                      name='size'
                      onChange={(e) => handleinput(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Diamond Cost</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Cost'
                      name='cost'
                      onChange={(e) => handleinput(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Lab Cost</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Cost'
                      name='lab'
                      onChange={(e) => handleinput(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Qty</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Qty'
                      name='quantity'
                      onChange={(e) => handleinput(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Carat </Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Carat'
                      name='tax'
                      onChange={(e) => handleinput(e, index)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Total</Form.Label>
                    <Form.Control
                      readOnly
                      type='number'
                      placeholder='Total'
                      name='total'
                      value={Number(item.cost) * Number(item.quantity)}
                      onChange={(e) => handletotal(e.target.value, index)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </>
        ))}
      </Form>
      
       <div className='container'>
      <div className={classes.Totalss} id='totals'>
          <div className='col-sm-3 col-md-3 col-lg-3'>SubTotal
          <p id='subcats'>{handletotal()}</p>
          </div>
          
          {formData.map((item) => (
            <>
              <div>
                <div className='col-sm-3 col-md-3 col-lg-3' >Carat {item.tax}</div>
                  <p id='subcats'>{(item.tax / 100) * handletotal()}</p>
              </div>
              <hr />
              
                <div> Totals
                  <p>{handletotal() + (item.tax / 100) * handletotal()}</p>
                  </div>
              
            </>
          ))}
        
      </div>
      </div>
    </div>
  );
}
  export default App;
