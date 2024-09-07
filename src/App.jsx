import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NoteBody from "./components/NoteBody";

export default function App(){
  return (
    <Box bgColor={'rgba(238, 238, 238, 1)'}>
      <NavBar />
      <NoteBody />
    </Box>
  );
}