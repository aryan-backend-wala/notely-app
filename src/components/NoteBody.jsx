import { 
  Box,
  Flex,
  Text,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  Checkbox,
  Container,
  HStack,
  Toast,
  Center,
  Button,
  IconButton,
  VStack,
  Grid,
  GridItem
 } from "@chakra-ui/react";

export default function NoteBody(){
  return <Box minHeight={'100vh'} margin={'32px 128px 0'}>
    <Text 
      fontSize={'2xl'}
      fontFamily={'Roboto'}
      fontWeight={'600'}
      lineHeight={'33.6px'}
      letterSpacing={"0.25px"}
    >
      Your notes
    </Text>
    <Flex
      align={'baseline'}
      justify={'space-between'}
    >
      <Tabs>
        <TabList>
          <Tab>ALL</Tab>
          <Tab>PERSONAL</Tab>
          <Tab>HOME</Tab>
          <Tab>BUSINESS</Tab>
        </TabList>

        <TabPanels maxW={'100px'}>
          <TabPanel padding={'0px'}>
            <Notes />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>fOUR!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Checkbox 
        size={'lg'}
        defaultChecked={true}>
        Show only completed notes
      </Checkbox>
    </Flex>
  </Box>
}

function Notes(){
  return <Grid 
    paddingTop={'33px'}
    templateColumns='repeat(3, 1fr)' gap={6}
    marginBottom={'20px'}
  >
    <Card></Card>  
    <Card></Card>
    <Card></Card>
  </Grid>
}

function Card(){
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
          <Button
            variant={'solid'}
            borderRadius={'28px'}
            isActive={'false'}
          >
            <Text
              fontFamily={'Roboto'}
              fontWeight={'400'}
              fontSize={'16px'}
            >Home</Text>
          </Button>
          <HStack gap={'20px'}>
            <Checkbox size={'lg'}></Checkbox>
            <IconButton
              variant={'outline'}
              icon={<img src="public\icons\edit_icon.svg" />}
            />
            <IconButton 
              variant={'outline'}
              icon={<img src="public\icons\delete_icon.svg" />}
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
          >Buy a new tea cup</Text>
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
              Remember to buy a new tea cup.
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