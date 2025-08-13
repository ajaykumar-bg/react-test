import React from "react";
import "./styles.css";

const DiscountInfo = () => {
  return (
    <ul className="discount-list">
      <li className="discount-item">
        <b>Standard Discount</b>
        <span>-</span>
        <span>6% discount</span>
      </li>
      <li className="discount-item">
        <b>Seasonal Discount</b>
        <span>-</span>
        <span>12% discount</span>
      </li>
      <li className="discount-item">
        <b>Weight Discount</b>
        <span>-</span>
        <ul className="nested-list">
          <li>
            <span>{`Weight < 10, `} 6% discount</span>
          </li>
          <li>
            <span>{`Weight > 10, `} 18% discount</span>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default DiscountInfo;
