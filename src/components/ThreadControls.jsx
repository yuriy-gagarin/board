import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

import ReplyForm from './ReplyForm'

class ThreadControls extends React.Component {
  state = { 
    formOpen: false, 
    removeButtonsOpen: false, 
    removeButtonsDisabled: false }

  toggleForm () {
    this.setState({ formOpen: !this.state.formOpen })
  }

  toggleRemoveDialog () {
    this.setState({ removeButtonsOpen: !this.state.removeButtonsOpen })
  }

  disableRemoveDialog () {
    this.setState({ removeButtonsDisabled: true })
  }

  render () {
    const { threadId, removeCallback } = this.props
    const { formOpen, removeButtonsOpen, removeButtonsDisabled } = this.state

    let form = null

    if (formOpen) {
      form = <ReplyForm />
    }

    let removeButton = (
      <Button 
        disabled={removeButtonsDisabled}
        className='action' 
        onClick={() => this.toggleRemoveDialog()}>
        Remove thread
      </Button>
    )

    if (removeButtonsOpen) {
      removeButton = (
        <Button.Group>
          <Button 
            disabled={removeButtonsDisabled} 
            onClick={() => this.toggleRemoveDialog()}>
            Cancel
          </Button>
          <Button.Or />
          <Button 
            disabled={removeButtonsDisabled} 
            onClick={() => { removeCallback(); this.disableRemoveDialog() }} 
            negative>
            Remove
          </Button>
        </Button.Group>
      )
    }

    return (
      <div className='ThreadControls'>
        <div className='thread-buttons'>
          <div>
            <Link className='action ui button' to={'/thread/' + threadId}>Go to thread</Link>
            {removeButton}
          </div>
          <div>
            <Button
              className='action' 
              animated='vertical'
              onClick={() => this.toggleForm()}>
              <Button.Content hidden>
                {!formOpen ? <Icon fitted name='caret down' /> : <Icon fitted name='caret up' />}
              </Button.Content>
              <Button.Content visible>
                {!formOpen ? 'Reply' : 'Close'}
              </Button.Content>
            </Button>
          </div>
        </div>
        {form}
      </div>
    )
  }
}

export default ThreadControls
