import { AlertDialog, useDisclosure,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription } from '@chakra-ui/react';
import {useRef, useState} from 'react';
import PropTypes from 'prop-types';

const ShowError = ({myref}) => {

  const {isOpen, onOpen, onClose} = useDisclosure();
  const cancelRef = useRef();

  const [message, setMessage] = useState('');

  myref((msg)=> {
    setMessage(msg);
    onOpen();
  });

  return (
      <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructuveRef={cancelRef}>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold' textColor='red'>
            Error
          </AlertDialogHeader>
          <AlertDialogBody>
            <Alert status='error'>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
}

ShowError.propTypes = {
  myref: PropTypes.func.isRequired
}

export default ShowError;
