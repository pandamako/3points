import React, { PureComponent } from 'react';

class Input extends PureComponent {
  render() {
    return (
      <input type='number' {...this.props} />
    );
  }
}

export default Input;
