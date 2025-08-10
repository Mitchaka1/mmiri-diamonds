import React from 'react';

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
      <div className="comparison-table">
        <div className="table-row table-header">
          <div className="cell">Mined Diamonds</div>
          <div className="cell">Water Diamonds</div>
        </div>
        <div className="table-row">
          <div className="cell">Extremely durable</div>
          <div className="cell">Extremely durable</div>
        </div>
        <div className="table-row">
          <div className="cell">Exceptional</div>
          <div className="cell">Exceptional</div>
        </div>
        <div className="table-row">
          <div className="cell">Environmentally destructive</div>
          <div className="cell">Sustainably created</div>
        </div>
        <div className="table-row">
          <div className="cell">Higher</div>
          <div className="cell">Lower</div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
