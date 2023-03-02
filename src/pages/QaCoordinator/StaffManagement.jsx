import React from "react";
import Icon from "../../components/Icon/Icon";
import { Grid, GridItem } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useState } from "react";

const StaffManagement = () => {
  const [bulb, setBulb] = useState(false);
  return (
    <>
      <div className="mt-3">
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem className="ml-5 mt-4" colSpan={2} h="10" bg="#EDF2F7">
            <InputGroup size="md" w="550">
              <Input type="text" placeholder="Search for staff" />
              <InputRightElement width="4.5rem">
                <Icon fontSize="20px" content="fa-solid fa-magnifying-glass" />
              </InputRightElement>
            </InputGroup>
          </GridItem>
        </Grid>
      </div>
      <div className="user-table-list">
        <TableContainer className="table-user">
          <Table size="md">
            <Thead>
              <Tr>
                <Th>USERNAME</Th>
                <Th>IDEAS POSTED</Th>
                <Th>COMMENTS MADE</Th>
                <Th>SEND THEM ENCOURAGEMENT</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Segun.adebayo</Td>
                <Td>10</Td>
                <Td>50</Td>
                <Td>
                  <div
                    className="text-center w-50"
                    onClick={() => {
                      if (!bulb) {
                        setBulb(!bulb);
                      }
                      setTimeout(() => {
                        setBulb(false);
                      }, 5000);
                    }}
                  >
                    <Icon
                      color="#D7B12A"
                      fontSize="20px"
                      content={
                        bulb
                          ? "fa-solid fa-lightbulb"
                          : "fa-regular fa-lightbulb"
                      }
                    />
                  </div>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default StaffManagement;
