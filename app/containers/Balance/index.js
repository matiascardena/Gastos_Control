// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { FormattedAmount } from 'utils/formatAmount';
import { getFormattedBalance, getFormattedInflowBalance, getFormattedOutflowBalance } from 'selectors/transactions';

import BalanceItem from 'components/Balance';
import BalanceRow from 'components/Balance/BalanceRow';

type BalanceProps = {
  balance: FormattedAmount,
  inflow: FormattedAmount,
  outflow: FormattedAmount,
};

class Balance extends React.Component<BalanceProps> {
  render() {
    const { inflow, outflow, balance } = this.props;

    return (
      <BalanceRow>
        <BalanceItem amount={inflow} title="Ingresos Totales" />
        <BalanceItem amount={outflow} title="Gastos Totales" prefix="-" />
        <BalanceItem amount={balance} title="Balance" colorize={false} prefix="=" />
      </BalanceRow>
    );
  }
}

const mapStateToProps = state => ({
  balance: getFormattedBalance(state),
  inflow: getFormattedInflowBalance(state),
  outflow: getFormattedOutflowBalance(state),
});

export default connect(mapStateToProps)(Balance);
