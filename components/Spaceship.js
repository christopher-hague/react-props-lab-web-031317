import React from 'react'

//Why can't I see any of this in my browser?
export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h3>Ship Name: {this.props.name}</h3>
        <p>Top Speed: {this.props.speed}</p>
        <p>Colors: {this.props.colors.join(", ")}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}
