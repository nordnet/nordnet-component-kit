import PropTypes from 'prop-types';
import React from 'react';
import throttle from 'lodash.throttle';
import classNames from 'classnames';
import Number from '../number/number';

/**
  This is the `<Updateable /> component`
*/

export default class Updateable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateableClass: '',
      value: props.value,
    };

    this.updateClass = throttle(this.updateClass.bind(this), this.props.maxUpdateFrequency);
    this.removeClass.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.maxUpdateFrequency !== nextProps.maxUpdateFrequency) {
      this.updateClass = throttle(this.updateClass.bind(this), nextProps.maxUpdateFrequency);
    }
    this.updateClass(this.props.value, nextProps.value);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value || this.state.updateableClass !== nextState.updateableClass;
  }

  updateClass(oldValue, newValue) {
    const diff = newValue - oldValue;
    if (diff === 0) return;

    this.setState(
      {
        updateableClass: diff < 0 ? this.props.negativeClass : this.props.positiveClass,
        value: newValue,
      },
      this.removeClass,
    );
  }

  removeClass() {
    setTimeout(() => {
      this.setState({
        updateableClass: '',
      });
    }, this.props.animationTime);
  }

  render() {
    const { className, positiveClass, negativeClass, animationTime, maxUpdateFrequency, ...rest } = this.props;
    const { updateableClass, value: stateValue } = this.state;
    return <Number {...rest} className={classNames(className, updateableClass)} value={stateValue} />;
  }
}
Updateable.defaultProps = {
  positiveClass: 'updateable--positive',
  negativeClass: 'updateable--negative',
  animationTime: 500,
  maxUpdateFrequency: 1000,
};
Updateable.propTypes = {
  value: PropTypes.any.isRequired, // eslint-disable-line
  positiveClass: PropTypes.string,
  negativeClass: PropTypes.string,
  /** Time in ms how long `postiveClass` or `negativeClass` will be applied */
  animationTime: PropTypes.number,
  /** Time in ms how long between each visual update. This should be larger than `animationTime` */
  maxUpdateFrequency: PropTypes.number,
  className: PropTypes.string,
};
