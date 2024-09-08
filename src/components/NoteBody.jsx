import { 
  Box,
  Flex,
  Text,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel,
  Checkbox
 } from "@chakra-ui/react";
import Notes from "./Notes";

export default function NoteBody({notes, onDeleteNote}){
  const personalNotes = notes.filter(
    note => note.category === 'personal');
  const homeNotes = notes.filter(
    note => note.category === 'home');
  const businessNotes = notes.filter(
    note => note.category === 'business');
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
            <Notes 
              notes={notes}
              onDeleteNote={onDeleteNote}
            />
          </TabPanel>
          <TabPanel>
            <Notes 
              notes={personalNotes}
              onDeleteNote={onDeleteNote}
            /> 
          </TabPanel>
          <TabPanel>
            <Notes 
              notes={homeNotes}
              onDeleteNote={onDeleteNote}
            />
          </TabPanel>
          <TabPanel>
            <Notes 
              notes={businessNotes}
              onDeleteNote={onDeleteNote}
            />
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



