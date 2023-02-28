import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";
import Icon from "../Icon/Icon";

const Department = (props) => {
  return (
    <div className="deparment-infor px-4 py-3">
      <div className="d-flex align-middle justify-content-between">
        <Heading as="b" size="md">
          {props.text}
        </Heading>
        <div className="d-flex">
          <div className="mr-3">
            <Icon
              fontSize="15px"
              color="#2B6CB0"
              content="fa-solid fa-pen-to-square"
            />
          </div>
          <Icon
            fontSize="15px"
            color="#FF0000CC"
            content="fa-regular fa-trash-can"
          />
        </div>
      </div>

      <div className="d-flex mt-4 justify-content-between">
        <div className="d-flex">
          <Icon fontSize="15px" color="#2B6CB0" content="fa-regular fa-user" />
          <Text as="b" className="text-department-1 mt-1 ml-2">
            50 Members
          </Text>
        </div>
        <Text as="cite" className="text-department-2 text-right m-0">
          Managed by: Username
        </Text>
      </div>
    </div>
  );
};

export default Department;
