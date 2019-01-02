import React from 'react'
import { Button, Form, TextArea, Icon } from 'semantic-ui-react'

class ReplyForm extends React.Component {
  render () {

    return (
      <div className='ReplyForm'>
        <Form>
          <TextArea autoHeight placeholder='Text...' />
        </Form>
        <div>
          <Button content='Post' animated='fade' primary>
            <Button.Content visible>Post</Button.Content>
            <Button.Content hidden> <Icon fitted name='envelope outline' /> </Button.Content>
          </Button>
        </div>
      </div>
    )
  }
}

export default ReplyForm
