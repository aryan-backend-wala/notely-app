import { AddIcon } from "@chakra-ui/icons";
import { 
  Container, 
  Flex, 
  Input, 
  InputLeftElement, 
  InputGroup,
  Button, 
  ButtonGroup,
  useDisclosure
} from "@chakra-ui/react";
import AddNote from "./addNote";

export default function NavBar({onAddNote}){
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Container 
      maxW={"100%"}
      height={'82px'}
      boxShadow={"0px 0px 20px 0px rgba(0,0,0,0.15)"}
      display={'flex'}
      align={'center'}
      justifyContent={'center'}
      bgColor={"#fff"}
    >
      <Flex
        width={'100%'}
        h={'48px'}
        align={'center'}
        justify={'space-between'}
        gap={'20px'}
        margin={"17px 128px"}
      >
        <InputGroup>
          <InputLeftElement>
            <img src="/public/icons/search_icon.svg" />
          </InputLeftElement>
          <Input 
            borderRadius={'8px'}
            placeholder="Search"
            bgColor={'rgba(238, 238, 238, 1)'}
          />
        </InputGroup>
        <Button 
          leftIcon={<AddIcon />}
          bgColor={"#42A5F5"}
          color={"#fff"}
          borderRadius={"56px"}
          variant={"solid"}
          onClick={onOpen}
        >
          Add

        </Button>
        <AddNote 
          isOpen={isOpen}
          onClose={onClose}
          onAdd={onAddNote}
        />
      </Flex>
    </Container>
  );
}