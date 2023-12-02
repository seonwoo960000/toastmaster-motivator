// Chakra imports
import { Box, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
// Custom components
import React from 'react';
import Carousel from './Carousel';

export default function WeeklyPhotos(props: { [x: string]: any }) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card padding="0" alignItems="center" flexDirection="column" w="100%" {...rest}>
        <Carousel />
    </Card>
  );
}
