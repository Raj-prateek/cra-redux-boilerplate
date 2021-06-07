// @flow
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from '../../translations/en.json';
import { flattenMessages } from '../../services/translations/intl';

const locales = {
  en: flattenMessages(enMessages),
};

export default class Root extends React.Component<*> {
  render(): React$Element<any> {
    const locale = 'en';
    const { children } = this.props;
    return (
      <IntlProvider locale={locale} messages={locales[locale]}>
        <div>{children}</div>
      </IntlProvider>
    );
  }
}
