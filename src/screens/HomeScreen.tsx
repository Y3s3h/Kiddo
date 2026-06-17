import React from "react";
import { SafeAreaView } from "react-native";

import HomeRenderer from "../renderer/HomeRenderer";
import homepageData from "../mock-data/homepage.json";

import CartCounter from "../components/CartCounter/CartCounter";
import CampaignBanner from "../components/CampaignBanner/CampaignBanner";
import FullScreenOverlay
from "../components/Overlay/FullScreenOverlay";

import {
  ThemeProvider,
} from "../context/ThemeContext";

import {
  campaignConfig,
} from "../campaigns/campaignConfig";

const HomeScreen = () => {
  const campaign =
    campaignConfig[
      homepageData.campaign.name as keyof typeof campaignConfig
    ];

  return (
    <ThemeProvider
      theme={homepageData.theme}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <CampaignBanner
          title={campaign.title}
          background={campaign.background}
        />

        <CartCounter />

        <HomeRenderer
          components={
            homepageData.components
          }
        />

         <FullScreenOverlay
      campaign={homepageData.campaign.name}
    />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default HomeScreen;