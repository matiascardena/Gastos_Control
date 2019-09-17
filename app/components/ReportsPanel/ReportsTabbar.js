// @flow
import * as React from 'react';

import NavLink from 'components/NavLink';
import styles from './style.scss';

const ReportsTabbar = () => (
  <div className={styles.tabbar}>
    <NavLink to="/reports/inflow-outflow" label="Ingresos vs Gastos" styles={styles} />
    <NavLink to="/reports/spending" label="Gastos por Categoría" styles={styles} />
  </div>
);

export default ReportsTabbar;
