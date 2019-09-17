// @flow
import * as React from 'react';
import OnIdle from '@modus/react-idle';
import NavLink from 'components/NavLink';
import Logo from './Logo';
import styles from './style.scss';

export default () => (
  <div className={styles.header}>
    <NavLink to="/budget" label="Gastos / Ingresos" styles={styles} />
    <NavLink to="/reports" label="Reportes" styles={styles} />
  </div>
);
