import React from "react";
import { SafeAreaView } from "react-native";

import HomeRenderer from "../renderer/HomeRenderer";
import homepageData from "../mock-data/homepage.json";

import CartCounter from "../components/CartCounter/CartCounter";
import CampaignBanner from "../components/CampaignBanner/CampaignBanner";
import FullScreenOverlay from "../components/Overlay/FullScreenOverlay";
import FloatingSaleBadge from "../components/FloatingSalebadge/FloatingSaleBadge";

import { ThemeProvider } from "../context/ThemeContext";

import { campaignConfig } from "../campaigns/campaignConfig";

const HomeScreen = () => {
  const campaign =
    campaignConfig[
      homepageData.campaign.name as keyof typeof campaignConfig
    ];

  return (
    <ThemeProvider theme={homepageData.theme}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Floating badge */}
        <FloatingSaleBadge />

        {/* Campaign Banner */}
        <CampaignBanner
          title={campaign.title}
          background={campaign.background}
        />

        {/* Top Navbar */}
        <CartCounter />

        {/* Dynamic Homepage */}
        <HomeRenderer
          components={homepageData.components}
        />

        {/* Campaign Overlay */}
        {/* <FullScreenOverlay
          campaign={homepageData.campaign.name}
        /> */}
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default HomeScreen;