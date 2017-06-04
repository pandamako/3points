import React, { PureComponent } from 'react';
import cn from 'classnames'
import './index.css'

class Input extends PureComponent {
  render() {
    return (
      <input type='number' {...this.props} className={cn(this.props.className, 'calc-input')}/>
    );
  }
}

export default Input;
