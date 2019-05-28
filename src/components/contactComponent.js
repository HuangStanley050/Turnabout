import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from "reactstrap";

const ContactForm = props => {
  return (
    <section style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Container>
        <h1
          style={{
            margin: "2rem auto",
            backgroundColor: "var(--primaryColor)",
          }}
          className="text-center text-info text-capitalize"
        >
          Contact Us
        </h1>
        <Form>
          <FormGroup>
            <Input type="text" name="name" id="name" placeholder="John Smith" />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="john@fakemail.com"
            />
          </FormGroup>
          <FormGroup>
            <Input
              style={{ height: "300px" }}
              type="textarea"
              name="text"
              id="exampleText"
            />
          </FormGroup>
        </Form>
        <div className="text-center">
          <Button color="primary" size="large">
            Submit
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
