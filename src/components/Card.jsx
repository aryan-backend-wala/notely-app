import { Box, Button, Checkbox, Flex, HStack, IconButton, Text, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import DeleteAlertDialog from "./AlertDialog";

export default function Card({note, onDelete}){
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  return (
    <Box 
      width={'403px'}
      height={'248px'}
      bgColor={'#fff'}
      borderRadius={'16px'}
      padding={'22px 20px'}
    >
      <Flex
        flexDirection={'column'}
      >
        <Flex 
          justify={'space-between'}
        >
          <CategoryButton note={note} />
          <HStack gap={'20px'}>
            <Checkbox size={'lg'}></Checkbox>
            <IconButton
              variant={'outline'}
              icon={<img src="public\icons\edit_icon.svg" />}
            />
            <IconButton 
              variant={'outline'}
              icon={<img src="public\icons\delete_icon.svg" />}
              onClick={onOpen}
            />
            <DeleteAlertDialog 
              isOpen={isOpen}
              onClose={onClose}
              onDelete={onDelete}
              note={note}
            />
          </HStack>
        </Flex>
        <VStack 
          align={'start'}
          paddingTop={'18px'}
        >
          <Text
            fontWeight={'600'}
            fontSize={'24px'}
            lineHeight={'33.6px'}
            letterSpacing={'0.25px'}
          >{note.title}</Text>
          <Box 
            width={'363px'}
            height={'75px'}
            paddingTop={'10px'}
            paddingBottom={'10px'}
          >
            <Text
              fontWeight={'400'}
              fontSize={'16px'}
              lineHeight={'24px'}
              letterSpacing={'0.5px'}
            >
              {note.description}
            </Text>
          </Box>
          <HStack
            width={'100%'}
            align={'center'}
            justifyContent={'space-between'}
          >
            <Text></Text>
            <Text>21.01.2023</Text>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

function CategoryButton({note}){
  const categoryClassMap = {
    business: 'purple',
    personal: 'orange',
    home: 'green',
  };
  const color = categoryClassMap[note.category] || 'gray';
  return <Button
  variant={'solid'}
  borderRadius={'28px'}
  isActive={'false'}
  colorScheme={color}
  color={'white'}
>
  <Text
    fontFamily={'Roboto'}
    fontWeight={'400'}
    fontSize={'16px'}
  >
    {note.category}
  </Text>
</Button>
}