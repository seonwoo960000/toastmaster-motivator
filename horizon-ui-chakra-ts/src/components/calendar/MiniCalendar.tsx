import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'assets/css/MiniCalendar.css';
import { Text, Icon } from '@chakra-ui/react';
// Chakra imports
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// Custom components
import Card from 'components/card/Card';

export default function MiniCalendar(props: {
  selectRange: boolean;
  events: { date: string; description: string }[]; // yyyy-MM-dd
  [x: string]: any;
}) {
  const { selectRange, ...rest } = props;
  const [value, onChange] = useState(new Date());
  const yyyyMMdd = (date: Date) => {
    const currentYear = date.getFullYear();
    const currentMonth =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const currentDay =
      date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${currentYear}-${currentMonth}-${currentDay}`;
  };
  const titleContent = ({ date, view }: { date: Date; view: string }) => {
    return (
      <Text
        color="brand.500"
        className={
          props.events.find((event) => event.date === yyyyMMdd(date))
            ? 'red-dot'
            : ''
        }
      ></Text>
    );
  };

  return (
    <Card
      alignItems="center"
      flexDirection="column"
      w="100%"
      maxW="max-content"
      p="20px 15px"
      h="max-content"
      {...rest}
    >
      <Calendar
        onChange={onChange}
        value={value}
        selectRange={selectRange}
        view={'month'}
        tileContent={titleContent}
        prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
        nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
      />
    </Card>
  );
}
