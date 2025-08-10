import React from 'react';
import ComparisonTable, { defaultRows } from './ComparisonTable';

function InfoPage() {
  return (
    <div className="info-page container">
      <h1>What Are Water Diamonds?</h1>
      <p>
        Water Diamonds are lab-grown stones as pure as water, offering the same brilliance
        and durability as mined diamonds but without the social and environmental impact.
        Our process ensures each gem is sustainably created and ethically sourced.
      </p>
      <p className="quote">'Blood may be thicker than water, but water leaves no stains.'</p>
      <ComparisonTable rows={defaultRows} />
    </div>
  );
}

export default InfoPage;
