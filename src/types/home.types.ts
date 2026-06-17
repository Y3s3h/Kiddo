import { HomeComponent, OverlayComponent } from "./component.types";
import { Campaign, Theme } from "./theme.types";

export interface HomePayload {
  theme: Theme;
  campaign: Campaign;
  overlay: OverlayComponent;
  components: HomeComponent[];
}