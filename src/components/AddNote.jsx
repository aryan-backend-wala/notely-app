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

export default function AddNote({isOpen, onClose, onOpen}){
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
                <Input />
              </FormLabel>
              <FormLabel width={'50%'}>
                <Text marginBottom={"4px"}>Category</Text>
                <Select
                  
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
                >0/200</Text>
              </Flex>
              <Textarea 
                placeholder={"Add description"}
                height={'152px'}
                resize={'none'}
              ></Textarea>
            </FormLabel>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button 
            mr={3} 
            onClick={onClose}
            variant={"ghost"}
          >
            Cancel
          </Button>
          <Button
            bgColor={"#42A5F5"}
            color={"#fff"}
            borderRadius={"56px"}
            variant={"solid"}
          >Add</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
}