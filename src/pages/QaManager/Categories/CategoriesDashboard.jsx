import React from "react";
import Category from "../../../components/Category/Category";
import {
  Grid,
  GridItem,
  InputGroup,
  Input,
  InputRightElement,
  InputLeftElement,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Icon from "../../../components/Icon/Icon";

const CategoriesDashboard = () => {
  const {
    isOpen: createIsOpen,
    onOpen: createOnOpen,
    onClose: createOnClose,
  } = useDisclosure();
  return (
    <div>
      <div className="mt-3">
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem className="ml-5 mt-4" colSpan={2} h="10" bg="#EDF2F7">
            <InputGroup size="md" w="550">
              <Input type="text" placeholder="Search for categories" />
              <InputRightElement width="4.5rem">
                <Icon fontSize="20px" content="fa-solid fa-magnifying-glass" />
              </InputRightElement>
            </InputGroup>
          </GridItem>
          <GridItem
            className="create-button ml-5 mt-4 mr-5"
            colStart={5}
            colEnd={5}
            h="10"
          >
            <Button colorScheme="blue" variant="outline" onClick={createOnOpen}>
              <Icon
                fontSize="20px"
                content="fa-regular fa-square-plus"
                paddingRight="10px"
              />
              Create a new category
            </Button>
          </GridItem>
        </Grid>
      </div>

      <Modal isOpen={createIsOpen} onClose={createOnClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup>
              <InputLeftElement
                children={<Icon content="fa-solid fa-pen-fancy" />}
              />
              <Input placeholder="Category Name" isRequired />
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="red"
              variant="ghost"
              mr={3}
              onClick={createOnClose}
            >
              Cancel
            </Button>
            <Button variant="solid" colorScheme="blue">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <Category text="CATEGORY 1" number="62" />
          </div>
          <div className="col-12 col-md-6 ">
            <Category text="CATEGORY 2 " number="26" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesDashboard;
