import React from "react";
import AcademicYear from "../../../components/AcademicYear/AcademicYear";
import { Grid, GridItem } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Icon from "../../../components/Icon/Icon";
import { Button } from "@chakra-ui/react";
import { history } from "../../../App";

const AcademicDashboard = () => {
  return (
    <div>
      <div className="mt-3">
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem className="ml-5 mt-4" colSpan={2} h="10" bg="#EDF2F7">
            <InputGroup size="md" w="550">
              <Input type="text" placeholder="Search for academic year" />
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
            <Button
              onClick={() => {
                history.push("/academic-dashboard/create-academic");
              }}
              colorScheme="blue"
              variant="outline"
            >
              <Icon
                fontSize="20px"
                content="fa-regular fa-clock"
                paddingRight="10px"
              />
              Create a new academic year
            </Button>
          </GridItem>
        </Grid>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <AcademicYear text="2022" />
          </div>
          <div className="col-12 col-md-6 ">
            <AcademicYear text="2023" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicDashboard;
