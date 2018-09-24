import React, { Component } from 'react'

export default function StaticWith(Wrappee) {
  return class extends Component {

    static displayName = `StaticWith(${ Wrappee.displayName || Wrappee.name || 'Component'})`

    shouldComponentUpdate() {
      return false
    }

    render() {
      return (
        <Wrappee {...this.props} />
      )
    }
  }
}
