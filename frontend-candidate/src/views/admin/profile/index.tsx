/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import Projects from "views/admin/profile/components/Projects";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "../../../assets/img/avatars/seonwoo.png";
import MemberProgress from "./components/MemberProgress";
import React from "react";
import Feedbacks from "./components/Feedbacks";

export default function Overview() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: '1fr',
          lg: '1fr 1fr 1fr',
        }}
        templateRows={{
          base: '1fr 2fr',
          lg: '1fr',
        }}
        gap={{ base: '20px', xl: '20px' }}
      >
        <Banner
          gridArea="1 / 1 / 2 / 2"
          banner={banner}
          avatar={avatar}
          name="Seon Woo Kim"
          job="HDTM Member"
          speeches="17"
          project="Motivational Strategies"
          following="274"
        />
        <Projects
          banner={banner}
          avatar={avatar}
        />
        <Feedbacks
          banner={banner}
          avatar={avatar}
        />
      </Grid>
      <MemberProgress />
    </Box>
  );
}
