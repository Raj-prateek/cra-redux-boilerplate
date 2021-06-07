// @flow
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

import HelloWorld from './HelloWorld.component';
import { clickMe } from '../../redux/Entity/actions';
import { getClickCountsSelector } from '../../redux/Entity/selectors';

const mapStateToProps = (state: Store): DashboardStore => ({
  counter: getClickCountsSelector(state),
});

const mapDispatchToProps = (dispatch: Function): DispatchPropsType => ({
  clickMe: () => dispatch(clickMe()),
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HelloWorld));
