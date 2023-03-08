import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  FormHelperText,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Icon from "../../../components/Icon/Icon";
import { Text } from "@chakra-ui/react";
import ButtonBlue from "../../../components/Button/ButtonBlue";
import { Button } from "@chakra-ui/react";
import { history } from "../../../App";
import { useState } from "react";

const UpdateAcademic = () => {
  const [startDateInput, setStartDateInput] = useState("text");
  const [endDateInput, setEndDateInput] = useState("text");
  return (
    <>
      <center className="create-user-area">
        <Grid className="m-4" gap={6}>
          <GridItem colStart={2} colEnd={4}>
            {" "}
            <Text fontSize="4xl" className="heading mt-0" colorScheme="blue">
              Update academic year 2023
            </Text>
          </GridItem>
          <GridItem colSpan={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Icon fontSize="15px" content="fa-regular fa-clock" />
                }
              />
              <Input type="email" placeholder="2023" />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={2}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Icon fontSize="15px" content="fa-regular fa-calendar" />
                }
              />
              <Input
                placeholder="10 Jan 2023"
                size="md"
                type={startDateInput}
                onFocus={() => {
                  setStartDateInput("date");
                }}
                onBlur={() => {
                  setStartDateInput("text");
                }}
              />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={2}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Icon fontSize="15px" content="fa-regular fa-calendar" />
                }
              />
              <Input
                placeholder="10 Dec 2023"
                size="md"
                type={endDateInput}
                onFocus={() => {
                  setEndDateInput("date");
                }}
                onBlur={() => {
                  setEndDateInput("text");
                }}
              />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <Icon fontSize="15px" content="fa-regular fa-calendar" />
                }
              />
              <Input placeholder="Idea's Deadline" />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={4}>
            <Button
              colorScheme="red"
              variant="ghost"
              size="lg"
              className="mr-3"
              onClick={() => {
                history.replace("/academic-dashboard");
              }}
            >
              Cancel
            </Button>
            <ButtonBlue className="ml-3" padding="9px 25px" text="Update" />
          </GridItem>
        </Grid>
      </center>
    </>
  );
};

export default UpdateAcademic;
