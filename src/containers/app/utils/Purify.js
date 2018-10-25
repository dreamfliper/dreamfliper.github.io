import React, { PureComponent } from 'react'

export default function StaticWith(Wrappee) {
  return class extends PureComponent {

    static displayName = `StaticWith(${ Wrappee.displayName || Wrappee.name || 'Component'})`

    render() {
      return (
        <Wrappee {...this.props} />
      )
    }
  }
}
