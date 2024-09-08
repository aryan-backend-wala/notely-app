import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Text,
  Button,
} from '@chakra-ui/react'
import React from 'react'

export default function DeleteAlertDialog({isOpen, onClose, note, onDelete}){
  const cancelRef = React.useRef()

    return  <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              <Text
                fontWeight={'600'}
                fontSize={'24px'}
                lineHeight={'34px'}
                letterSpacing={'0.25px'}
              >
                Delete note
              </Text>
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Text
                fontWeight={'400'}
                fontSize={'16px'}
                lineHeight={'24px'}
                letterSpacing={'0.5px'}
              >
                Are you sure you want to delete this note?
              </Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button 
                ref={cancelRef} 
                onClick={onClose}
                variant={'ghost'}
              >
                Cancel
              </Button>
              <Button 
                colorScheme='red' 
                onClick={onClose} 
                ml={3}
                borderRadius={'56px'}
                onClickCapture={() => onDelete(note.id)}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
   
}