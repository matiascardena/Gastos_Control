// @flow
import * as React from 'react';
import formatAmount from 'utils/formatAmount';
import type { Transaction } from 'modules/transactions';
import type { Categories } from 'modules/categories';
import styles from './style.scss';

type BudgetGridRowProps = {
  transaction: Transaction,
  categories: Categories,
  setEditTransaction: Function,
};
const BudgetGridRow = ({ transaction, categories, setEditTransaction }: BudgetGridRowProps) => {
  const amount = formatAmount(transaction.value);
  const amountCls = amount.isNegative ? styles.neg : styles.pos;
  const { id, categoryId, description } = transaction;
  const category = categories[categoryId];

  return (
    <tr key={id} onClick={() => setEditTransaction(id)}>
      <td>
        <div className={styles.cellLabel}>Categoría</div>
        <div className={styles.cellContent}>{category}</div>
      </td>
      <td>
        <div className={styles.cellLabel}>Descripción</div>
        <div className={styles.cellContent}>{description}</div>
      </td>
      <td className={amountCls}>
        <div className={styles.cellLabel}>Saldo</div>
        <div className={styles.cellContent}>{amount.text}</div>
      </td>
    </tr>
  );
};

export default BudgetGridRow;
