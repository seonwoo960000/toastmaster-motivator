// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';

export default function Banner(props: {
  banner: string;
  avatar: string;
  name: string;
  job: string;
  speeches: number | string;
  project: number | string;
  following: number | string;
  [x: string]: any;
}) {
  const { banner, avatar, name, job, speeches, project, following, ...rest } =
    props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  const borderColor = useColorModeValue(
    'white !important',
    '#111C44 !important',
  );
  return (
    <Card mb={{ base: '0px', lg: '20px' }} alignItems="center" {...rest}>
      <Box
        bg={`url(${banner})`}
        bgSize="cover"
        borderRadius="16px"
        h="131px"
        w="100%"
      />
      <Avatar
        mx="auto"
        src={avatar}
        h="87px"
        w="87px"
        mt="-43px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {job}
      </Text>
      <Flex mx="auto" mt="24px" alignItems="center" flexDirection="column">
        <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
          {project}
        </Text>
        <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
          Project
        </Text>
      </Flex>
			<Flex mx="auto" mt="24px" alignItems="center" flexDirection="column">
				<Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
					{speeches}
				</Text>
				<Text color={textColorSecondary} fontSize="sm" fontWeight="400">
					Speeches
				</Text>
			</Flex>
		</Card>
  );
}
