import PropTypes from 'prop-types';
import React from 'react';
import { throttle, omit } from 'lodash';
import classNames from 'classnames';
import Value from '../value/value';

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
        diff, // eslint-disable-line
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
    const { props, state } = this;
    return this.props.render(props, state);
  }
}
Updateable.defaultProps = {
  positiveClass: 'updateable--positive',
  negativeClass: 'updateable--negative',
  animationTime: 300,
  maxUpdateFrequency: 1000,
  // eslint-disable-next-line
  render: (
    { className, positiveClass, negativeClass, animationTime, maxUpdateFrequency, ...rest }, // eslint-disable-line
    { updateableClass, value: stateValue },
  ) => <Value {...omit(rest, 'render')} className={classNames(className, updateableClass)} value={stateValue} />,
};

Updateable.propTypes = {
  value: PropTypes.any.isRequired, // eslint-disable-line
  positiveClass: PropTypes.string,
  negativeClass: PropTypes.string,
  /** Time in ms how long `postiveClass` or `negativeClass` will be applied */
  animationTime: PropTypes.number,
  /** Time in ms how long between each visual update. This should be larger than `animationTime` */
  maxUpdateFrequency: PropTypes.number,
  className: PropTypes.string, // eslint-disable-line
  /** `(props, {diff, updateableClass, value}=state) => <Component />` */
  render: PropTypes.func,
};
