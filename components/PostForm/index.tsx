import React, { FC } from 'react';
import Router from 'next/router';
import { Form, Card, Button } from 'semantic-ui-react';
import { TextArea, InputField } from 'react-semantic-redux-form';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Post } from '../../types';

type Props = {
  post?: Post
} & InjectedFormProps


const PostForm: FC<Props> = (props) => {
  const { post, handleSubmit, initialize, reset, pristine, submitting} = props;

  React.useEffect(() => {
    if(post) {
      initialize(post);
    }
  }, [post, initialize]);

  const onCancel = () => {
    reset();
    Router.push("/");
  }

  return (
    <Card 
      fluid 
      style={{
        top: '50%', 
        transform: 'translateY(-50%)'
      }}>
      <Card.Content>
        <Card.Header 
          textAlign='center'>
          {post ? 'EDIT POST' : 'ADD POST'}
        </Card.Header>
        <Form>
          <Form.Field>
            <Field 
              name='title' component={InputField}
              placeholder='Enter post Title...' />
          </Form.Field>
          <Form.Field>
            <Field 
              name='body' component={TextArea} 
              placeholder='Enter post body...'
              style={{ minHeight: 200 }} />
          </Form.Field>
          <Button 
            primary
            type='submit'
            floated='right' 
            disabled={pristine || submitting}
            onClick={handleSubmit} 
            >
              {post ? 'Save' : 'Add'}
          </Button>
          <Button 
            secondary
            type='button'
            floated='right'
            disabled={submitting}
            onClick={onCancel}>
              Cancel
          </Button>
        </Form>
      </Card.Content>
    </Card>
  );
}

export default reduxForm<{}, {post?: Post}>({form: 'post'})(PostForm);
