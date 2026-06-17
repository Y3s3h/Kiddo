import { Action } from "./action.types";

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  action?: Action;
}

export interface BannerHeroComponent {
  id: string;
  type: "BANNER_HERO";
  imageUrl: string;
}

export interface ProductGridComponent {
  id: string;
  type: "PRODUCT_GRID_2X2";
  title: string;
  products: Product[];
}

export interface DynamicCollectionComponent {
  id: string;
  type: "DYNAMIC_COLLECTION";
  title: string;
  products: Product[];
}

export interface OverlayComponent {
  type: "FULL_SCREEN_OVERLAY";
  animationUrl: string;
}

export type HomeComponent =
  | BannerHeroComponent
  | ProductGridComponent
  | DynamicCollectionComponent;