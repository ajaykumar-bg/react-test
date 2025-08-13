import React, { useState, useMemo } from "react";
import { getDiscountedPrice } from "./utils";
import DiscountInfo from "./DiscountInfo";
import "./styles.css";

const PriceCalculator = () => {
  const [formData, setFormData] = useState({
    type: "standard",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const discountedPrice = useMemo(
    () => getDiscountedPrice(formData),
    [formData]
  );

  return (
    <div className="price-calculator">
      <div className="form-group">
        <label htmlFor="type">Select Type:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={(e) => handleChange(e)}
        >
          <option value="standard">Standard</option>
          <option value="seasonal">Seasonal</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          step="0.01"
          value={formData.weight}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="totalPrice">Total Price ($):</label>
        <input
          type="number"
          id="totalPrice"
          name="totalPrice"
          step="0.01"
          value={formData.totalPrice}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <DiscountInfo />

      <div className="result">
        Discounted price: <span id="discountedPrice">{discountedPrice}</span>
      </div>
    </div>
  );
};

export default PriceCalculator;
