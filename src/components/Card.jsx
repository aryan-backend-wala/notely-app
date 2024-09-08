import { Box, Button, Checkbox, Flex, HStack, IconButton, Text, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import DeleteAlertDialog from "./AlertDialog";
import { handleISOString } from "../utils/dateFromIsoString";

export default function Card({note, onDelete, onEdit}){
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
            <Checkbox 
              size={'lg'}
              checked={note.isDone}
              onChange={() => onEdit(note.id)}
            >
            </Checkbox>
            <IconButton
              variant={'outline'}
              icon={<img src="/icons/edit_icon.svg" />}
              isDisabled={note.isDone}
            />
            <IconButton 
              variant={'outline'}
              icon={<img src="/icons/delete_icon.svg" />}
              onClick={onOpen}
              isDisabled={note.isDone}
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
            textDecoration={note.isDone ? 'line-through' : 'none'}
            color={note.isDone ? 'rgba(33, 33, 33, 0.36)' : 'rgba(33, 33, 33, 0.87)'}
          >
            {note.title}
          </Text>
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
              textDecoration={note.isDone ? 'line-through' : 'none'}
              color={note.isDone ? 'rgba(33, 33, 33, 0.36)' : 'rgba(33, 33, 33, 0.87)'}
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
            <Text
              fontWeight={'400'}
              fontSize={'14px'}
              lineHeight={'24px'}
              letterSpacing={'0.25px'}
              color={note.isDone ? 'rgba(33, 33, 33, 0.36)' : 'rgba(33, 33, 33, 0.6)'}
            >
              {handleISOString(note.timeStamp)}
            </Text>
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
  const bgColor = note.isDone ? 'gray' : categoryClassMap[note.category]; 
  const color = note.isDone ? 'black' : 'white' 
  return <Button
  variant={'solid'}
  borderRadius={'28px'}
  isActive={'false'}
  colorScheme={bgColor}
  color={color}
  isDisabled={note.isDone}
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