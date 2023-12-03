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
import { Avatar, Box, SimpleGrid } from "@chakra-ui/react";
// Assets
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import ComplexTable from "views/admin/default/components/ComplexTable";
import WeeklyPhotos from "views/admin/default/components/WeeklyPhotos";
import { tableDataComplex } from "views/admin/default/variables/tableDataComplex";
import moonsun from "assets/img/avatars/moonsun.png";
import michael from "assets/img/avatars/michael.png";
import dave from "assets/img/avatars/dave.png";
import naomi from "assets/img/avatars/naomi.png";
import miniCalendarEvents from "./variables/miniCalendarEvents";
import React from "react";
import MemberProgress from "../profile/components/MemberProgress";

export default function UserReports() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid columns={{ base: 2, '2xl': 4 }} gap="20px" mb="20px">
        <MiniStatistics
          startContent={
            <Avatar
              h={{ base: '48px', xl: '36px', '2xl': '48px' }}
              w={{ base: '48px', xl: '36px', '2xl': '48px' }}
              src={moonsun}
              me="20px"
            />
          }
          name="Best Speaker"
          value="Moon Sun"
        />
        <MiniStatistics
          startContent={
            <Avatar
              h={{ base: '48px', xl: '36px', '2xl': '48px' }}
              w={{ base: '48px', xl: '36px', '2xl': '48px' }}
              src={michael}
              me="20px"
            />
          }
          name="Best Table Topic Speaker"
          value="Michael"
        />
        <MiniStatistics
          startContent={
            <Avatar
              h={{ base: '48px', xl: '36px', '2xl': '48px' }}
              w={{ base: '48px', xl: '36px', '2xl': '48px' }}
              src={naomi}
              me="20px"
            />
          }
          name="Most Frequent Speaker"
          value="Naomi"
        />
        <MiniStatistics
          startContent={
            <Avatar
              h={{ base: '48px', xl: '36px', '2xl': '48px' }}
              w={{ base: '48px', xl: '36px', '2xl': '48px' }}
              src={dave}
              me="20px"
            />
          }
          name="Best Evaluator"
          value="Dave"
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 2 }} gap="20px" mb="20px">
        <ComplexTable tableData={tableDataComplex} />
        <MiniCalendar selectRange={false} events={miniCalendarEvents} />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <WeeklyPhotos />
      </SimpleGrid>
    </Box>
  );
}
