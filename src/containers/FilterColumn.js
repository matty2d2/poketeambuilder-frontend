import React from "react";
import { Form } from "semantic-ui-react";

class FilterColumn extends React.Component {
  render() {
    return (
      <>
        <Form className='to-left'>
          <Form.Group grouped>
            <h2>Generations</h2>
            <Form.Field label="All" value={0} control="input" type="checkbox" />{" "}
            <Form.Field label="Generation 1" value={1} control="input" type="checkbox" />{" "}
            <Form.Field label="Generation 2" value={2} control="input" type="checkbox" />{" "}
            <Form.Field label="Generation 3" value={3} control="input" type="checkbox" />{" "}
            <Form.Field label="Generation 4" value={4} control="input" type="checkbox" />{" "}
            <Form.Field label="Generation 5" value={5} control="input" type="checkbox" />{" "}
            <Form.Field label="Generation 6" value={6} control="input" type="checkbox" />{" "}          </Form.Group>
        </Form>
      </>
    );
  }
}

export default FilterColumn;
