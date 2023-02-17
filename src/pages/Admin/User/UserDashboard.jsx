import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Icon from "../../../components/Icon/Icon";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const UserDashboard = () => {
  return (
    <>
      <div>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem className="search-area" colSpan={2} h="10" bg="#EDF2F7">
            <InputGroup size="md">
              <Input pr="4.5rem" type="text" placeholder="Search for users" />
              <InputRightElement width="4.5rem">
                <Icon fontSize="20px" content="fa-solid fa-magnifying-glass" />
              </InputRightElement>
            </InputGroup>
          </GridItem>
          <GridItem className="create-button" colStart={5} colEnd={5} h="10">
            <Button colorScheme="blue" variant="outline">
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
          <Table size="sm">
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
                  <ul class="row">
                    <Icon
                      className="col bg-danger"
                      fontSize="20px"
                      content="fa-solid fa-file"
                      paddingRight="15px"
                    />
                    <Icon
                      className="col col bg-info"
                      fontSize="20px"
                      content="fa-solid fa-pen-to-square"
                      paddingRight="15px"
                    />
                    <Icon
                      className="col bg-warning"
                      fontSize="20px"
                      content="fa-solid fa-trash"
                    />
                  </ul>
                </Td>
              </Tr>
              <Tr>
                <Td>vinhka@fpt.edu.vn</Td>
                <Td>QA Manager</Td>
                <Td>Department 2</Td>
                <Td>
                  <ul class="row">
                    <Icon
                      className="col bg-danger"
                      fontSize="20px"
                      content="fa-solid fa-file"
                      paddingRight="15px"
                    />
                    <Icon
                      className="col col bg-info"
                      fontSize="20px"
                      content="fa-solid fa-pen-to-square"
                      paddingRight="15px"
                    />
                    <Icon
                      className="col bg-warning"
                      fontSize="20px"
                      content="fa-solid fa-trash"
                    />
                  </ul>
                </Td>
              </Tr>
              <Tr>
                <Td>khanh@fpt.edu.vn</Td>
                <Td>QA Coordinator</Td>
                <Td>Department 3</Td>
                <Td>
                  <ul class="row">
                    <Icon
                      className="col bg-danger"
                      fontSize="20px"
                      content="fa-solid fa-file"
                      paddingRight="15px"
                    />
                    <Icon
                      className="col col bg-info"
                      fontSize="20px"
                      content="fa-solid fa-pen-to-square"
                      paddingRight="15px"
                    />
                    <Icon
                      className="col bg-warning"
                      fontSize="20px"
                      content="fa-solid fa-trash"
                    />
                  </ul>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default UserDashboard;
