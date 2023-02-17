import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Icon from "../../../components/Icon/Icon";
import { Select } from "@chakra-ui/react";
import ButtonBlue from "../../../components/Button/ButtonBlue";
import { Button, ButtonGroup } from "@chakra-ui/react";

const CreateUser = () => {
  return (
    <>
      <center className="create-user-area">
        <Grid
          h="360px"
          w="1000px"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem colStart={2} colEnd={4}>
            {" "}
            <p className="title-3">Create a new user</p>
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
            <Select variant="outline" placeholder="Choose Position" />
          </GridItem>
          <GridItem colSpan={4}>
            <Button colorScheme="red" variant="ghost" padding="0px 24px;">
              Cancel
            </Button>
            <ButtonBlue padding="10px 30px" text="Create" />
          </GridItem>
        </Grid>
      </center>
    </>
  );
};

export default CreateUser;
