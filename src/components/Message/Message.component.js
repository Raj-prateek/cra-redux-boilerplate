// @flow
import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

type Props = {
  counter: int,
};

class HelloWorld extends Component<Props> {
  render() {
    const { counter } = this.props;
    return (
      <p>
        <FormattedMessage id="componentTitle" values={{ counter }} />
      </p>
    );
  }
}

export default injectIntl(HelloWorld);
