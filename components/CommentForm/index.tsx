import React, { FC } from 'react';
import { Form } from 'semantic-ui-react';
import { TextArea } from 'react-semantic-redux-form';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

const CommentForm: FC<InjectedFormProps> = (props) => {
  const { handleSubmit, submitting, pristine } = props;

  return (
    <Form size='mini' onSubmit={handleSubmit}>
      <Form.Field>
        <Field 
          name='body' component={TextArea} 
          label='Comment' placeholder='Enter comment...' />
      </Form.Field>
      <Form.Button 
        primary 
        disabled={pristine || submitting}
        type='submit'
      >
        Add
      </Form.Button>
    </Form>
  );
}

export default reduxForm<{}, {}>({})(CommentForm);
