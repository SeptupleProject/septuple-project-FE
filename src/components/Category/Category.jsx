import React from "react";
import {
  Heading,
  Text,
  Badge,
  Card,
  HStack,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  ModalOverlay,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
} from "@chakra-ui/react";
import Icon from "../Icon/Icon";
import "../../assets/scss/main.scss";

const Category = (props) => {
  const {
    isOpen: updateIsOpen,
    onOpen: updateOnOpen,
    onClose: updateOnClose,
  } = useDisclosure();
  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onClose: deleteOnClose,
  } = useDisclosure();

  return (
    <Card variant="elevated">
      <div className="px-4 py-3">
        <div className="d-flex align-middle justify-content-between">
          <Heading size="xl">{props.text}</Heading>
          <div className="d-flex">
            <div className="mr-3">
              <IconButton
                colorScheme="blue"
                variant="ghost"
                icon={<Icon content="fa-solid fa-pen-to-square" />}
                onClick={updateOnOpen}
              />
            </div>
            <Modal isOpen={updateIsOpen} onClose={updateOnClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Update {props.text}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <InputGroup>
                    <InputLeftElement
                      children={<Icon content="fa-solid fa-pen-fancy" />}
                    />
                    <Input placeholder={props.text} />
                  </InputGroup>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="red"
                    variant="ghost"
                    mr={3}
                    onClick={updateOnClose}
                  >
                    Cancel
                  </Button>
                  <Button variant="solid" colorScheme="blue">
                    Update
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <IconButton
              colorScheme="red"
              variant="ghost"
              icon={<Icon content="fa-regular fa-trash-can" />}
              onClick={deleteOnOpen}
            />
            <Modal isOpen={deleteIsOpen} onClose={deleteOnClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Delete {props.text}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontSize="md" className="deleteNotice">
                    Are you sure? You can't undo this action afterwards.
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    variant="ghost"
                    mr={3}
                    onClick={deleteOnClose}
                  >
                    Cancel
                  </Button>
                  <Button variant="solid" colorScheme="red">
                    Delete
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>

        <div className="d-flex mt-4 justify-content-between">
          <HStack spacing={6}>
            <Badge variant="subtle" colorScheme="blue">
              USING
            </Badge>

            <HStack spacing={2}>
              <Icon
                fontSize="15px"
                color="#2B6CB0"
                content="fa-regular fa-lightbulb"
              />
              <Text className="numOfIdeaPost" fontSize="xs">
                {props.number} ideas posted
              </Text>
            </HStack>
          </HStack>
        </div>
      </div>
    </Card>
  );
};

export default Category;
