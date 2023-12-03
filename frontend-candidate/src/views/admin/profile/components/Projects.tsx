// Chakra imports
import { Text, useColorModeValue } from '@chakra-ui/react';
// Assets
import Project1 from 'assets/img/profile/Project1.png';
import Project2 from 'assets/img/profile/Project2.png';
import Project3 from 'assets/img/profile/Project3.png';
// Custom components
import Card from 'components/card/Card';
import Project from 'views/admin/profile/components/Project';

export default function Projects(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');
	return (
		<Card mb={{ base: '0px', '2xl': '20px' }} {...rest}>
			<Text color={textColorPrimary} fontWeight='bold' fontSize='2xl' mt='10px' mb='4px'>
				All projects
			</Text>
			<Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
				Here you can keep track of your projects.
			</Text>
			<Project
				boxShadow={cardShadow}
				mb='20px'
				image={Project1}
				level='1'
				link='#'
				title='Motivational Strategies'
			/>
			<Project
				boxShadow={cardShadow}
				mb='20px'
				image={Project2}
				level='2'
				link='#'
				title='Dynamic Leadership'
			/>
			<Project
				boxShadow={cardShadow}
				image={Project3}
				level='1'
				link='#'
				title='Engaging Humor'
			/>
		</Card>
	);
}
