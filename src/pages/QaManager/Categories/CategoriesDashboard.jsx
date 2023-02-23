import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Icon from "../../../components/Icon/Icon";
import { Button } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import CategoryInfor from "../../../components/CategoryInfor/CategoryInfor";

const CategoriesDashboard = () => {
  return (
    <>
      <div className="mt-3">
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem className="ml-5 mt-4" colSpan={2} h="10" bg="#EDF2F7">
            <InputGroup size="md" w="550">
              <Input type="text" placeholder="Search for departments" />
              <InputRightElement width="4.5rem">
                <Icon fontSize="20px" content="fa-solid fa-magnifying-glass" />
              </InputRightElement>
            </InputGroup>
          </GridItem>
          <GridItem className="ml-5 mt-4 mr-5" colStart={5} colEnd={5} h="10">
            <Button colorScheme="blue" variant="outline">
              <Icon
                fontSize="20px"
                content="fa-solid fa-user-plus"
                paddingRight="10px"
              />
              Create a new department
            </Button>
          </GridItem>
        </Grid>
      </div>
      <SimpleGrid columns={2} spacingX="40px" spacingY="20px" className="m-5">
        <CategoryInfor text="Department 1" />
        <CategoryInfor text="Department 2" />
        <CategoryInfor text="Department 3" />
        <CategoryInfor text="Department 4" />
        <CategoryInfor text="Department 5" />
        <CategoryInfor text="Department 6" />
        <CategoryInfor text="Department 7" />
        <CategoryInfor text="Department 8" />
        <CategoryInfor text="Department 9" />
        <CategoryInfor text="Department 10" />
        <CategoryInfor text="Department 11" />
        <CategoryInfor text="Department 12" />
        <CategoryInfor text="Department 13" />
        <CategoryInfor text="Department 14" />
      </SimpleGrid>
    </>
  );
};

export default CategoriesDashboard;
