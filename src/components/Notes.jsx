import { Grid } from "@chakra-ui/react";
import Card from "./Card";

export default function Notes({notes, onDeleteNote, onCheck, onEdit, open}){
  return <Grid 
    paddingTop={'33px'}
    templateColumns='repeat(3, 1fr)' gap={6}
    marginBottom={'20px'}
  >
    {notes.map(note => <Card 
      key={note.id}
      note={note}
      onDelete={onDeleteNote}
      onCheck={onCheck}
      onEdit={onEdit}
      open={open}
    />)}
  </Grid>
}