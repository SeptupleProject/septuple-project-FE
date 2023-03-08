import React from "react";
import Select from "react-select";
import {
  Button,
  Center,
  Card,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  ButtonGroup,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import Icon from "../../../components/Icon/Icon";
import { history } from "../../../App";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const coordinators = [
  { value: "segun", label: "segun.adebayo" },
  { value: "mark", label: "mar_kchandler" },
  { value: "lazar", label: "lazarmikolov" },
  { value: "javier", label: "javieralaves" },
];

const staff = [
  { value: "segun", label: "segun.adebayo" },
  { value: "mark", label: "mar_kchandler" },
  { value: "lazar", label: "lazarmikolov" },
  { value: "javier", label: "javieralaves" },
  { value: "bel", label: "belfigula" },
  { value: "joy", label: "joyniifer" },
  { value: "jake", label: "jakegillen" },
  { value: "violet", label: "violetbo" },
  { value: "aldous", label: "aldousharding" },
  { value: "angel", label: "angelolsen" },
  { value: "faye", label: "fayewebster" },
  { value: "julian", label: "julianbaker" },
  { value: "lucy", label: "lucydasus" },
  { value: "maggie", label: "maggierogers" },
  { value: "aurora", label: "auroraaknes" },
  { value: "orla", label: "orlagartland" },
];

const CreateDepartment = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => setName(e.target.value);

  const isFalse = name === "";

  return (
    <Center>
      <Card className="cardForm" height={"480px"}>
        <Grid className="m-4" gap={10}>
          <GridItem colStart={2} colEnd={4}>
            <Text fontSize="4xl" className="heading" colorScheme="blue">
              Add a new department
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired isInvalid={isFalse}>
              <FormLabel>Department Name</FormLabel>
              <InputGroup>
                <InputLeftElement
                  children={
                    <Icon content="fa-regular fa-building" fontSize="20px" />
                  }
                />
                <Input
                  size="md"
                  placeholder="Department Name"
                  variant="outline"
                  value={name}
                  onChange={handleNameChange}
                />
              </InputGroup>
              {!isFalse ? (
                <FormHelperText>
                  Put A Name For The New Department
                </FormHelperText>
              ) : (
                <FormErrorMessage>Name is required</FormErrorMessage>
              )}
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>QA Coordinator</FormLabel>
              <Select
                closeMenuOnSelect={false}
                options={coordinators}
                placeholder="Choose QA Coordinator"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4}>
            <FormControl>
              <FormLabel>Including Staff</FormLabel>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={staff}
                placeholder="Choose including staff"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={4}>
            <Center>
              <ButtonGroup size="lg">
                <Button
                  variant="ghost"
                  colorScheme="red"
                  onClick={() => {
                    history.push("/department-dashboard");
                  }}
                >
                  Cancel
                </Button>
                <Button variant="solid" colorScheme="blue">
                  Create
                </Button>
              </ButtonGroup>
            </Center>
          </GridItem>
        </Grid>
      </Card>
    </Center>
  );
};

export default CreateDepartment;
