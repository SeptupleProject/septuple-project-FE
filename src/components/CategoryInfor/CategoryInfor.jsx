import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import Icon from "../Icon/Icon";

const CategoryInfor = (props) => {
  return (
    <div className="category-infor">
      <Flex h="50%" className="ml-2">
        <Heading as="b" p="3" size="md">
          {props.text}
        </Heading>
        <Stack
          spacing={3}
          direction="row"
          p="3"
          className="icon-category-infor mr-2"
        >
          <Icon
            fontSize="15px"
            color="#2B6CB0"
            content="fa-solid fa-pen-to-square"
          />
          <Icon
            fontSize="15px"
            color="#FF0000CC"
            content="fa-regular fa-trash-can"
          />
        </Stack>
      </Flex>
      <Flex h="50%" className="ml-2">
        <Stack spacing={3} direction="row" p="3">
          <Icon fontSize="15px" color="#2B6CB0" content="fa-regular fa-user" />
          <Text as="b" className="text-category-1 mt-1">
            50 Members
          </Text>
        </Stack>
        <Text p="3" as="cite" className="text-category-2 mr-2">
          Managed by: Username
        </Text>
      </Flex>
    </div>
  );
};

export default CategoryInfor;
