import React from 'react';

/**
 * Default comparison rows describing how Water Diamonds differ from
 * their mined counterparts. Components may reuse this data or supply
 * their own rows via the `rows` prop.
 */
export const defaultRows = [
  { label: 'Durability', mined: 'Extremely durable', water: 'Extremely durable' },
  { label: 'Brilliance', mined: 'Exceptional', water: 'Exceptional' },
  {
    label: 'Environmental Impact',
    mined: 'Environmentally destructive',
    water: 'Sustainably created',
  },
  { label: 'Cost', mined: 'Higher', water: 'Lower' },
];

/**
 * Renders a comparison table highlighting key differences between mined diamonds
 * and Water Diamonds. The component expects a list of rows where each row
 * contains a label and the values for both columns.
 */
function ComparisonTable({ rows = defaultRows }) {
  return (
    <table className="comparison-table">
      <thead>
        <tr>
          <th scope="col">Mined Diamonds</th>
          <th scope="col">Water Diamonds</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <td>{row.mined}</td>
            <td>{row.water}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ComparisonTable;
