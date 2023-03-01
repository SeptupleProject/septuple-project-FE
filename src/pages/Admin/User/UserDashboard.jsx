import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Icon from "../../../components/Icon/Icon";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { history } from "../../../App";
const UserDashboard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  let signedInAccount = useSelector(
    (state) => state.accountReducer.signedInAccount
  );
  const renderModal = () => {
    return (
      <Modal
        closeOnOverlayClick={true}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>Delete user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure ? You can't undo this action after reward
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} variant="ghost">
              Cancel
            </Button>
            <Button colorScheme="red">Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  return (
    <>
      {signedInAccount.role === "admin" ? (
        <>
          <div className="mt-3">
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              <GridItem className="ml-5 mt-4" colSpan={2} h="10" bg="#EDF2F7">
                <InputGroup size="md" w="550">
                  <Input type="text" placeholder="Search for users" />
                  <InputRightElement width="4.5rem">
                    <Icon
                      fontSize="20px"
                      content="fa-solid fa-magnifying-glass"
                    />
                  </InputRightElement>
                </InputGroup>
              </GridItem>
              <GridItem
                className="create-button ml-5 mt-4 mr-5"
                colStart={5}
                colEnd={5}
                h="10"
              >
                <Button
                  onClick={() => {
                    history.push("/user-dashboard/create-user");
                  }}
                  colorScheme="blue"
                  variant="outline"
                >
                  <Icon
                    fontSize="20px"
                    content="fa-solid fa-user-plus"
                    paddingRight="10px"
                  />
                  Create a new user
                </Button>
              </GridItem>
            </Grid>
          </div>
          <div className="user-table-list">
            <TableContainer className="table-user">
              <Table size="md">
                <Thead>
                  <Tr>
                    <Th>EMAIL</Th>
                    <Th>POSITION</Th>
                    <Th>DEPARTMENT</Th>
                    <Th>ACTION</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>selina@fpt.edu.vn</Td>
                    <Td>Staff</Td>
                    <Td>Department 1</Td>
                    <Td>
                      <Center w="30%">
                        <div
                          onClick={() => {
                            history.push("/user-dashboard/update-user");
                          }}
                        >
                          <Icon
                            color="#D7B12A"
                            fontSize="20px"
                            content="fa-solid fa-pen-to-square"
                            paddingRight="15px"
                          />
                        </div>
                        <div onClick={onOpen}>
                          <Icon
                            color="#FF0000CC"
                            fontSize="20px"
                            content="fa-regular fa-trash-can"
                          />
                        </div>
                      </Center>
                      {renderModal()}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default UserDashboard;
