import React from 'react'

/**
 * @param {string} resultProp
 * @param {function} updateCheck
 * 
 * HOC.
 * Resolves `before` prop, before wrapped component is mounted/updated.
 * `before` shold be an async function
 */
const withBefore = (resultProp = 'result', updateCheck = (prevProps, thisProps) => false) => (
  (WrappedComponent) => (
    class WithBefore extends React.Component {
      state = {}

      async callBefore () {
        const result = await this.props.before(this.props)
        this.setState({
          complete: true,
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
        if (!this.state.complete) {
          return null
        } else {
          return <WrappedComponent {...this.props} {...this.state} />
        }
      }      
    }
  )
)

export default withBefore
