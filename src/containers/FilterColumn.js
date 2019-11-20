import React from "react";
import { Form } from "semantic-ui-react";

class FilterColumn extends React.Component {
  render() {
    return (
      <>
        <Form className='to-left'>
          <Form.Group grouped>
            <h2>Generations</h2>
            <Form.Field label="This one" control="input" type="checkbox" />{" "}
            <Form.Field label="That one" control="input" type="checkbox" />{" "}
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default FilterColumn;
