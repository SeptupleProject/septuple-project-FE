import React from "react";
import {
  Center,
  Card,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  VStack,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import Icon from "../../../components/Icon/Icon";
import { history } from "../../../App";
import "../../../assets/scss/main.scss";

const UpdateUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { newPass, setNewPass } = useState("oldPass");
  const { confirmPass, setConfirmPass } = useState("newPass");

  const handleNewPassChange = (e) => setNewPass(e.target.value);
  const handleConfirmPassChange = (e) => setConfirmPass(e.target.value);

  const isUnmatched = newPass !== confirmPass;

  return (
    <>
      <Center>
        <Card className="cardForm">
          <Text fontSize="4xl" className="heading" colorScheme="blue">
            Update user's information
          </Text>
          <span className="resetPass">
            <Button
              onClick={onOpen}
              variant="outline"
              colorScheme="blue"
              size="md"
              rightIcon={<Icon content="fa-solid fa-key" />}
            >
              Reset Password
            </Button>
          </span>

          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Reset Password</ModalHeader>
              <ModalCloseButton />
              <ModalBody className="inputGroup">
                <FormControl isRequired isInvalid={isUnmatched}>
                  <FormLabel>New Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      className="mt-1"
                      children={<Icon content="fa-solid fa-lock" />}
                    />
                    <Input
                      placeholder="New Password"
                      value={newPass}
                      onChange={handleNewPassChange}
                      size="lg"
                    />
                  </InputGroup>
                  {isUnmatched ? (
                    <FormErrorMessage>
                      The Two Passwords Don't Match
                    </FormErrorMessage>
                  ) : (
                    <FormHelperText>Type Your Desired Password</FormHelperText>
                  )}
                </FormControl>

                <FormControl isInvalid={isUnmatched}>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      className="mt-1"
                      children={<Icon content="fa-solid fa-lock" />}
                    />
                    <Input
                      placeholder="Confirm Password"
                      value={confirmPass}
                      onChange={handleConfirmPassChange}
                      size="lg"
                    />
                  </InputGroup>
                  {isUnmatched ? (
                    <FormErrorMessage>
                      The Two Passwords Don't Match
                    </FormErrorMessage>
                  ) : (
                    <FormHelperText>
                      Confirm Password Must Match With New Password
                    </FormHelperText>
                  )}
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
                <Button variant="solid" colorScheme="red">
                  Reset
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Center className="ml-5">
            <VStack width={"100%"} spacing={6} className="ml-5">
              <FormControl className="ml-3">
                <FormLabel>Email</FormLabel>
                <InputGroup className="updateInput" width={"86%"}>
                  <InputLeftElement
                    children={
                      <div className="mt-2">
                        <Icon
                          content="fa-regular fa-envelope"
                          fontSize="20px"
                        />
                      </div>
                    }
                  />
                  <Input
                    size="lg"
                    placeholder="segun.adebayo@domain.com"
                    isDisabled
                    variant="filled"
                  />
                </InputGroup>
              </FormControl>

              <FormControl className="ml-3">
                <FormLabel>Position</FormLabel>
                <Select
                  size="lg"
                  placeholder="Staff"
                  className="updateInput"
                  width={"86%"}
                >
                  <option value="coordinator">QA Coordinator</option>
                  <option value="manager">QA Manager</option>
                </Select>
              </FormControl>
            </VStack>
          </Center>

          <ButtonGroup className="actionBtn">
            <Button
              variant="ghost"
              colorScheme="red"
              onClick={() => {
                history.push("/user-dashboard");
              }}
            >
              Cancel
            </Button>
            <Button variant="solid" colorScheme="blue">
              Update
            </Button>
          </ButtonGroup>
        </Card>
      </Center>
    </>
  );
};

export default UpdateUser;
