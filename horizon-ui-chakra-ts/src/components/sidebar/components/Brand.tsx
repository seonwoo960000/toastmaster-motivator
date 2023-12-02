// Chakra imports
import { Flex, Image } from '@chakra-ui/react';

// Custom components
import { HSeparator } from 'components/separator/Separator';
import Toastmasters from 'assets/img/toastmasters.png';

export function SidebarBrand() {
  //   Chakra color mode
  return (
    <Flex alignItems="center" flexDirection="column">
      <Image boxSize="120px" src={Toastmasters} mb={4}></Image>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
