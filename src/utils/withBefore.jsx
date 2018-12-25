import React from 'react'
import { omit } from 'lodash'

/**
 * @param {string} resultProp
 * @param {function} updateCheck
 * 
 * HOC.
 * Resolves `beforeProp`, before wrapped component is mounted/updated.
 * `beforeProp` shold be an async function
 */
const withBefore = (resultProp = 'result', updateCheck = (prevProps, thisProps) => false, beforeProp = 'before') => (
  (WrappedComponent) => (
    class WithBefore extends React.Component {
      state = {}
      complete = Symbol('complete')

      async callBefore () {
        const result = await this.props[beforeProp](this.props)
        this.setState({
          [this.complete]: true,
          [resultProp]: result
        })
      }

      componentDidMount () {
        this.callBefore()
      }

      componentDidUpdate (prevProps) {
        if (updateCheck(prevProps, this.props))
          this.callBefore()
      }

      render() {
        if (!this.state[this.complete]) {
          return null
        } else {
          return <WrappedComponent {...omit(this.props, beforeProp)} {...this.state} />
        }
      }      
    }
  )
)

export default withBefore
