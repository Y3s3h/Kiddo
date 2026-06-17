import { Action } from "../types/action.types";
import { useCartStore } from "../store/cartStore";

export const handleAction = (
  action: Action
) => {
  switch (action.type) {
    case "ADD_TO_CART":

  useCartStore
    .getState()
    .addToCart();

  

  break;

    case "DEEP_LINK":
      
      break;

    case "APPLY_MYSTERY_GIFT_COUPON":
      
      break;

    default:
      
  }
};