import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Icon from "../../../components/Icon/Icon";
import { Select, Text } from "@chakra-ui/react";
import ButtonBlue from "../../../components/Button/ButtonBlue";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { history } from "../../../App";
const CreateUser = () => {
  return (
    <>
      <center className="create-user-area">
        <Grid className="m-4" gap={6}>
          <GridItem colStart={2} colEnd={4}>
            {" "}
            <Text fontSize="4xl" className="heading mt-0" colorScheme="blue">
              Create a new user
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Icon fontSize="15px" content="fa-regular fa-envelope" />
                }
              />
              <Input type="email" placeholder="Email Address" />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={2}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon fontSize="15px" content="fa-solid fa-key" />}
              />
              <Input type="password" placeholder="Password" />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={4}>
            <Select variant="outline" placeholder="Choose Position">
              <option value="staff">Staff</option>
              <option value="qaCoordinator">QA Coordinator</option>
              <option value="qaManager">QA Manager</option>
            </Select>
          </GridItem>
          <GridItem colSpan={4}>
            <Button
              colorScheme="red"
              variant="ghost"
              size="lg"
              className="mr-3"
              onClick={() => {
                history.push("/user-dashboard");
              }}
            >
              Back
            </Button>
            <ButtonBlue className="ml-3" padding="9px 25px" text="Create" />
          </GridItem>
        </Grid>
      </center>
    </>
  );
};

export default CreateUser;
