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
  VStack,
  Image
 } from "@chakra-ui/react";
import Notes from "./Notes";
import { useState } from "react";

export default function NoteBody({notes, onDeleteNote, onCheck, onEdit, onOpen}){
  const [showAll, setShowAll] = useState(false);
  const newNotes = showAll ? notes.filter(note => note.isDone) : notes;
  const personalNotes = newNotes.filter(
    note => note.category === 'personal');
  const homeNotes = newNotes.filter(
    note => note.category === 'home');
  const businessNotes = newNotes.filter(
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
          <TabPanel>
            {notes.length > 0 ? <Notes 
              notes={newNotes}
              onDeleteNote={onDeleteNote}
              onCheck={onCheck}
              onEdit={onEdit}
              open={onOpen}
            /> : <ErrorNote />}
          </TabPanel>
          <TabPanel>
            {notes.length > 0 ? <Notes 
              notes={personalNotes}
              onDeleteNote={onDeleteNote}
              onCheck={onCheck}
              onEdit={onEdit}
              open={onOpen}
            /> : <ErrorNote />} 
          </TabPanel>
          <TabPanel>
            {homeNotes.length > 0 ? <Notes 
              notes={homeNotes}
              onDeleteNote={onDeleteNote}
              onCheck={onCheck}
              onEdit={onEdit}
              open={onOpen}
            /> : 
            <ErrorNote />
            }
          </TabPanel>
          <TabPanel>
            {notes.length > 0 ? <Notes 
              notes={businessNotes}
              onDeleteNote={onDeleteNote}
              onCheck={onCheck}
              onEdit={onEdit}
              open={onOpen}
            /> : <ErrorNote />}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Checkbox 
        size={'lg'}
        defaultChecked={false}
        onChange={() => setShowAll(!showAll)}
      >
        Show only completed notes
      </Checkbox>
    </Flex>
  </Box>
}

function ErrorNote(){
  return (
    <Flex
              height={'80vh'}
              width={'80vw'}
              align={'center'}
              justify={'center'}
            >
              <VStack>
                <Image 
                  src="/icons/no_notes.svg"
                />
                <Text
                  paddingTop={'20px'}
                  fontWeight={'500'}
                  fontSize={'20px'}
                  lineHeight={'34px'}
                  letterSpacing={'0.25px'}
                >You don’t have any notes</Text>
              </VStack>
            </Flex>
  );
}