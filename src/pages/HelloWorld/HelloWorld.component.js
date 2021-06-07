// @flow
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Message from '../../components/Message/Message.component';

type Props = {};
export type StateType = {
  counter: int,
};
export type DispatchPropsType = {
  clickMe: Function,
};

class HelloWorld extends Component<Props & StateType & DispatchPropsType> {
  render() {
    const { counter, clickMe } = this.props;
    return (
      <div>
        <h2>
          <FormattedMessage id="pageTitle" />
        </h2>
        <button type="button" onClick={() => clickMe()}>
          Click Me
        </button>
        <Message counter={counter} />
      </div>
    );
  }
}

export default HelloWorld;
