export interface AddToCartAction {
  type: "ADD_TO_CART";
  payload: {
    id: string;
  };
}

export interface DeepLinkAction {
  type: "DEEP_LINK";
  payload: {
    url: string;
  };
}

export interface ApplyCouponAction {
  type: "APPLY_MYSTERY_GIFT_COUPON";
  payload: {
    couponCode: string;
  };
}

export type Action =
  | AddToCartAction
  | DeepLinkAction
  | ApplyCouponAction;