// Chakra imports
import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
// Assets

export default function Feedback(props: {
  feedback: string;
  image: string;
  [x: string]: any;
}) {
  const { feedback, image, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const bg = useColorModeValue('white', 'navy.700');
  return (
    <Card bg={bg} {...rest} p="14px">
      <Flex align="center" direction={{ base: 'column', md: 'row' }}>
        <Image h="80px" w="80px" src={image} borderRadius="8px" me="20px" />
        <Box mt={{ base: '10px', md: '0' }}>
          <Text
            color={textColorPrimary}
            fontWeight="500"
            fontSize="md"
            mb="4px"
          >
            {feedback}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
