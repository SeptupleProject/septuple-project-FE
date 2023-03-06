import React from "react";
import Select from "react-select";
import {
  Button,
  Center,
  HStack,
  Card,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  ButtonGroup,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Icon from "../../../components/Icon/Icon";
import { history } from "../../../App";
import makeAnimated from "react-select/animated";
import "../../../assets/scss/main.scss";

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

const UpdateDepartment = () => {
  return (
    <Center>
      <Card className="cardForm" height={"400px"}>
        <Grid className="m-4" gap={10}>
          <GridItem colStart={2} colEnd={4}>
            <Text fontSize="4xl" className="heading" colorScheme="blue">
              Update department
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
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
                isRequired
              />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={2}>
            <Select
              closeMenuOnSelect={false}
              options={coordinators}
              placeholder="QA Coordinator"
            />
          </GridItem>
          <GridItem colSpan={4}>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={staff}
              placeholder="Including staff"
            />
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
                  Update
                </Button>
              </ButtonGroup>
            </Center>
          </GridItem>
        </Grid>
      </Card>
    </Center>
  );
};

export default UpdateDepartment;
