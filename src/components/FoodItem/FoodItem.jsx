import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, menu_name, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="image" className="food-item-img" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="add_icon_white"
            className="add"
           
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="remove_icon_red"
      
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="add_icon_green"
     
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <p>{menu_name}</p>
        </div>
        <p className="food-item-price"><img src={assets.rating_starts} alt="rating_starts" /></p>
      </div>
    </div>
  );
};

export default FoodItem;
