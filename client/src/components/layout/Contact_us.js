import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default function Contact_us() {
  return (
    <div className="contact_us"  align="center">
      <div className="heading pt-5" align="center">
          <hr/>
          <h1 align="center">WHAT’S IT WORTH?</h1>
      </div>
      <div className="row pt-5 content" align="center">
        <div className="col-md-5 mt-5">
          <h1 align="left">The Market Is Ever Changing...<br/>
              <span style={{paddingLeft:'100px'}}>and with that so are the values.</span></h1>
          <p>Leave it to us to help maximize your<br/>
            return on one of the biggest<br/>
            investments of your life.</p>

            <p>Just fill out the form here and <br/>
            we’ll give you a FREE, accurate<br/>
            valuation on your property!</p>
        </div>
        <div className="arraw_image"></div>
        <div className="col-md-7">
          <div className="background">
            <h1 align="left">We’ll just need a little info from you so that we can accurately assess and value your home.</h1>
            <Form align="left" style={{width:'80%'}}>
              <Form.Group className="mb-3">
                <Form.Label>Your full name...</Form.Label>
                <Form.Control type="text" name="fullname" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>A good contact number...</Form.Label>
                <Form.Control type="text" name="contact_number"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>A working email address...</Form.Label>
                <Form.Control type="text" name="fullname" name="working_email"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your address (or we can call you for it)...</Form.Label>
                <Form.Control type="text" name="address"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Anything else that you'd like to tell us.</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: '70px'}}
                  name="commit"
                />
              </Form.Group>
              <div className="row">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
