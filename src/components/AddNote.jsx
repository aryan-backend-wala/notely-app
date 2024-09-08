import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Flex,
  Input, 
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  HStack,
  VStack,
  Select,
  Textarea 
} from '@chakra-ui/react'
import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'

export default function AddNote({isOpen, onClose, onAdd, updateNote}){
  const [note, setNote] = useState({
    title: "",
    description: "",
    category: 'personal',
    isDone: false
  })

  useEffect(() => {
    if(updateNote){
      setNote({
        title: updateNote.title,
        description: updateNote.description,
        category: updateNote.category,
        isDone: updateNote.isDone
      })
    } else {
      setNote({
        title: "",
        description: "",
        category: "personal",
        isDone: false
      })
    }
  }, [updateNote])
  const maxLength = 200
  return <Modal
        isOpen={isOpen} 
        onClose={onClose} 
        isCentered
        size={'xl'}
      >
      <ModalOverlay />
      <ModalContent padding={'27px 24px 24px'} borderRadius={'16px'}>
        <ModalHeader padding={'0px'}>Add Note</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={'0'}>
          <FormControl>
            <HStack 
              marginBottom={'30px'}
              marginTop={'27px'}
              
            >
              <FormLabel width={'50%'}>
                <Text marginBottom={"4px"}>Title</Text>
                <Input 
                  placeholder='Add title'
                  name='title'
                  value={note.title}
                  onChange={(e) => setNote({...note, title: e.target.value})}
                />
              </FormLabel>
              <FormLabel width={'50%'}>
                <Text marginBottom={"4px"}>Category</Text>
                <Select
                  name='category'
                  value={note.category}
                  onChange={(e) => setNote({...note, category: e.target.value})}
                >
                  <option value='personal'>Personal</option>
                  <option value='home'>Home</option>
                  <option value='business'>Business</option>
                </Select>
              </FormLabel>
            </HStack>
            <FormLabel>
              <Flex 
                justify={'space-between'}
              >
                <HStack align={'baseline'}>
                  <Text marginBottom={"7px"}>Description</Text>
                  <Text 
                    fontFamily={'Roboto'} 
                    fontWeight={'400'}
                    fontSize={'14px'}
                    lineHeight={'24px'}
                    letterSpacing={'0.25px'}
                  >(optional)</Text>
                </HStack>
                <Text 
                  fontFamily={'Roboto'} 
                  fontWeight={'400'}
                  fontSize={'14px'}
                  lineHeight={'24px'}
                  letterSpacing={'0.25px'}
                >{note.description.length}/{maxLength}</Text>
              </Flex>
              <Textarea 
                placeholder={"Add description"}
                height={'152px'}
                resize={'none'}
                name='description'
                maxLength={200}
                value={note.description}
                onChange={(e) => setNote({...note, description: e.target.value})}
              ></Textarea>
            </FormLabel>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button 
            mr={3}
            variant={"ghost"}
            onClick={() => {
              setNote({
                title: "",
                description: "",
                category: "personal",
                isDone: false
              })
              onClose()
            }}
          >
            Cancel
          </Button>
          <Button
            bgColor={"#42A5F5"}
            color={"#fff"}
            borderRadius={"56px"}
            variant={"solid"}
            onClick={() => {
              onAdd(note);
              setNote({
                title: "",
                description: "",
                category: "personal",
                isDone: false
              })
              onClose();
            }}
          >{updateNote ? "Save" : "Add"}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
}