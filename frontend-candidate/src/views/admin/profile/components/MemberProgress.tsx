// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from '../../../../components/card/Card';
import LineChart from '../../../../components/charts/LineChart';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { MdBarChart, MdOutlineCalendarToday } from 'react-icons/md';
// Assets
import { RiArrowUpSFill } from 'react-icons/ri';
import {
  memberPreparedSpeechProgress,
  lineChartOptionsTotalSpent,
} from '../../../../variables/charts';
import * as React from "react";

export default function MemberProgress(props: { [x: string]: any }) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = useColorModeValue('secondaryGray.600', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const iconColor = useColorModeValue('brand.500', 'white');
  const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const bgHover = useColorModeValue(
    { bg: 'secondaryGray.400' },
    { bg: 'whiteAlpha.50' },
  );
  const bgFocus = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.100' },
  );
  return (
    <Card
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      {...rest}
    >
      <Flex align="center" justify="space-between" w="100%" pe="20px" pt="5px">
        <Button
          bg={boxBg}
          fontSize="sm"
          fontWeight="500"
          color={textColorSecondary}
          borderRadius="7px"
        >
          <Icon
            as={MdOutlineCalendarToday}
            color={textColorSecondary}
            me="4px"
          />
          2023-12
        </Button>
      </Flex>
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Progress Monitoring
        </Text>
      </Flex>
      <Box w="100%" h="100%">
        <LineChart
          w="500px"
          chartData={memberPreparedSpeechProgress}
          chartOptions={lineChartOptionsTotalSpent}
        />
      </Box>
    </Card>
  );
}
