import React from "react";
import { useState } from "react";
import Icon from "../Icon/Icon";
import {
  Center,
  Card,
  CardBody,
  HStack,
  Text,
  Tag,
  Badge,
  Stat,
  StatHelpText,
  StatLabel,
  StatArrow,
  StatNumber,
  Divider,
  VStack,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import alternativeImg from "../../assets/img/gwuni.png";

const FeaturedPost = (props) => {
  let image = props.item;
  const [uploadImg, setUploadImg] = useState(image);

  switch (props.post) {
    case "views":
      return (
        <Center>
          <Card
            className="px-4 py-2"
            variant="elevated"
            borderBottom="solid 4px #9747FF"
          >
            <CardBody className="post">
              <div className="d-flex justify-content-between align-middle">
                <HStack spacing="13px" align="center" paddingBottom={"0"}>
                  <Icon
                    content="fa-regular fa-circle-user"
                    fontSize="45px"
                    color="#2b6cb0"
                    className="iconAvatar"
                  ></Icon>
                  <Text fontSize="2xl" className="staffName">
                    segun.adebayo
                  </Text>
                  <Tag colorScheme="blue" size="md" className="categoryTag">
                    CATEGORY 1
                  </Tag>
                </HStack>
              </div>
              <HStack spacing={3} className="my-2">
                <Text fontSize="xl" fontWeight="bold">
                  Idea Title
                </Text>
                <Badge colorScheme="purple" variant="solid">
                  Most viewed idea post
                </Badge>
              </HStack>
              <Text fontSize="md" className="my-3">
                A small IT division assists all departments by providing IT
                support and infrastructure. Over the last 20 years the division
                also systematically developed a web-based platform for managing
                the scholarships. The system has proven to be highly effective
                and, apart from a few minor issues, staff members over all
                departments are happy to use it.
              </Text>
              <HStack>
                <img
                  src={alternativeImg}
                  alt="..."
                  className="img-fluid image"
                />
                <Stat>
                  <StatLabel fontSize="lg">Number of views</StatLabel>
                  <StatNumber
                    color="#9747FF"
                    fontWeight="semibold"
                    style={{ fontSize: "40px" }}
                  >
                    1000
                  </StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    26% more than last month
                  </StatHelpText>
                </Stat>

                <VStack spacing={6} alignItems="flex-start">
                  <Tag variant="outline" colorScheme="pink" size="lg">
                    <div className="mr-2">
                      <Icon content="fa-regular fa-comment-dots" />
                    </div>
                    <TagLabel>62 comments</TagLabel>
                  </Tag>
                  <Tag variant="outline" colorScheme="green" size="lg">
                    <div className="mr-2">
                      <Icon content="fa-regular fa-thumbs-up" />
                    </div>
                    <TagLabel>54 likes</TagLabel>
                  </Tag>
                  <Tag variant="outline" colorScheme="red" size="lg">
                    <div className="mr-2">
                      <Icon content="fa-regular fa-thumbs-down" />
                    </div>
                    <TagLabel>34 dislikes</TagLabel>
                  </Tag>
                </VStack>
              </HStack>
            </CardBody>
          </Card>
        </Center>
      );

    case "comments":
      return (
        <Center>
          <Card
            className="px-4 py-2"
            variant="elevated"
            borderBottom="solid 4px #D53F8C"
          >
            <CardBody className="post">
              <div className="d-flex justify-content-between align-middle">
                <HStack spacing="13px" align="center" paddingBottom={"0"}>
                  <Icon
                    content="fa-regular fa-circle-user"
                    fontSize="45px"
                    color="#2b6cb0"
                    className="iconAvatar"
                  ></Icon>
                  <Text fontSize="2xl" className="staffName">
                    segun.adebayo
                  </Text>
                  <Tag colorScheme="blue" size="md" className="categoryTag">
                    CATEGORY 1
                  </Tag>
                </HStack>
              </div>
              <HStack spacing={3} className="my-2">
                <Text fontSize="xl" fontWeight="bold">
                  Idea Title
                </Text>
                <Badge colorScheme="pink" variant="solid">
                  Most commented idea post
                </Badge>
              </HStack>
              <Text fontSize="md" className="my-3">
                A small IT division assists all departments by providing IT
                support and infrastructure. Over the last 20 years the division
                also systematically developed a web-based platform for managing
                the scholarships. The system has proven to be highly effective
                and, apart from a few minor issues, staff members over all
                departments are happy to use it.
              </Text>
              <HStack>
                <img
                  src={alternativeImg}
                  alt="..."
                  className="img-fluid image"
                />
                <Stat>
                  <StatLabel fontSize="lg">Number of comments</StatLabel>
                  <StatNumber
                    color="#D53F8C"
                    fontWeight="semibold"
                    style={{ fontSize: "40px" }}
                  >
                    251
                  </StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    26% more than last month
                  </StatHelpText>
                </Stat>

                <VStack spacing={6} alignItems="flex-start">
                  <Tag variant="outline" colorScheme="purple" size="lg">
                    <div className="mr-2">
                      <Icon content="fa-regular fa-eye" />
                    </div>
                    <TagLabel>402 views</TagLabel>
                  </Tag>
                  <Tag variant="outline" colorScheme="green" size="lg">
                    <div className="mr-2">
                      <Icon content="fa-regular fa-thumbs-up" />
                    </div>
                    <TagLabel>54 likes</TagLabel>
                  </Tag>
                  <Tag variant="outline" colorScheme="red" size="lg">
                    <div className="mr-2">
                      <Icon content="fa-regular fa-thumbs-down" />
                    </div>
                    <TagLabel>34 dislikes</TagLabel>
                  </Tag>
                </VStack>
              </HStack>
            </CardBody>
          </Card>
        </Center>
      );

    case "likes":
      return (
        <Center>
          <Card
            className="px-4 py-2"
            variant="elevated"
            borderBottom="solid 4px #38A169"
          >
            <CardBody className="post">
              <div className="d-flex justify-content-between align-middle">
                <HStack spacing="13px" align="center" paddingBottom={"0"}>
                  <Icon
                    content="fa-regular fa-circle-user"
                    fontSize="45px"
                    color="#2b6cb0"
                    className="iconAvatar"
                  ></Icon>
                  <Text fontSize="2xl" className="staffName">
                    segun.adebayo
                  </Text>
                  <Tag colorScheme="blue" size="md" className="categoryTag">
                    CATEGORY 1
                  </Tag>
                </HStack>
              </div>
              <HStack spacing={3} className="my-2">
                <Text fontSize="xl" fontWeight="bold">
                  Idea Title
                </Text>
                <Badge colorScheme="green" variant="solid">
                  Most liked idea post
                </Badge>
              </HStack>
              <Text fontSize="md" className="my-3">
                A small IT division assists all departments by providing IT
                support and infrastructure. Over the last 20 years the division
                also systematically developed a web-based platform for managing
                the scholarships. The system has proven to be highly effective
                and, apart from a few minor issues, staff members over all
                departments are happy to use it.
              </Text>
              <HStack>
                <img
                  src={alternativeImg}
                  alt="..."
                  className="img-fluid image"
                />
                <Stat>
                  <StatLabel fontSize="lg">Number of likes</StatLabel>
                  <StatNumber
                    color="#38A169"
                    fontWeight="semibold"
                    style={{ fontSize: "40px" }}
                  >
                    136
                  </StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    26% more than last month
                  </StatHelpText>
                </Stat>

                <VStack spacing={6} alignItems="flex-start">
                  <Tag variant="outline" colorScheme="purple" size="lg">
                    <div className="mr-2">
                      <Icon content="fa-regular fa-eye" />
                    </div>
                    <TagLabel>402 views</TagLabel>
                  </Tag>
                  <Tag variant="outline" colorScheme="pink" size="lg">
                    <div className="mr-2">
                      <Icon content="fa-regular fa-comment-dots" />
                    </div>
                    <TagLabel>62 comments</TagLabel>
                  </Tag>
                  <Tag variant="outline" colorScheme="red" size="lg">
                    <div className="mr-2">
                      <Icon content="fa-regular fa-thumbs-down" />
                    </div>
                    <TagLabel>34 dislikes</TagLabel>
                  </Tag>
                </VStack>
              </HStack>
            </CardBody>
          </Card>
        </Center>
      );

    case "dislikes":
      return (
        <Center>
          <Card
            className="px-4 py-2"
            variant="elevated"
            borderBottom="solid 4px #FF0000CC"
          >
            <CardBody className="post">
              <div className="d-flex justify-content-between align-middle">
                <HStack spacing="13px" align="center" paddingBottom={"0"}>
                  <Icon
                    content="fa-regular fa-circle-user"
                    fontSize="45px"
                    color="#2b6cb0"
                    className="iconAvatar"
                  ></Icon>
                  <Text fontSize="2xl" className="staffName">
                    segun.adebayo
                  </Text>
                  <Tag colorScheme="blue" size="md" className="categoryTag">
                    CATEGORY 1
                  </Tag>
                </HStack>
              </div>
              <HStack spacing={3} className="my-2">
                <Text fontSize="xl" fontWeight="bold">
                  Idea Title
                </Text>
                <Badge colorScheme="red" variant="solid">
                  Most disliked idea post
                </Badge>
              </HStack>
              <Text fontSize="md" className="my-3">
                A small IT division assists all departments by providing IT
                support and infrastructure. Over the last 20 years the division
                also systematically developed a web-based platform for managing
                the scholarships. The system has proven to be highly effective
                and, apart from a few minor issues, staff members over all
                departments are happy to use it.
              </Text>
              <HStack>
                <img
                  src={alternativeImg}
                  alt="..."
                  className="img-fluid image"
                />
                <Stat>
                  <StatLabel fontSize="lg">Number of dislikes</StatLabel>
                  <StatNumber
                    color="#FF0000CC"
                    fontWeight="semibold"
                    style={{ fontSize: "40px" }}
                  >
                    39
                  </StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    26% more than last month
                  </StatHelpText>
                </Stat>

                <VStack spacing={6} alignItems="flex-start">
                  <Tag variant="outline" colorScheme="purple" size="lg">
                    <div className="mr-2">
                      <Icon content="fa-regular fa-eye" />
                    </div>
                    <TagLabel>402 views</TagLabel>
                  </Tag>
                  <Tag variant="outline" colorScheme="pink" size="lg">
                    <div className="mr-2">
                      <Icon content="fa-regular fa-comment-dots" />
                    </div>
                    <TagLabel>54 comments</TagLabel>
                  </Tag>
                  <Tag variant="outline" colorScheme="green" size="lg">
                    <div className="mr-2">
                      <Icon content="fa-regular fa-thumbs-up" />
                    </div>
                    <TagLabel>34 likes</TagLabel>
                  </Tag>
                </VStack>
              </HStack>
            </CardBody>
          </Card>
        </Center>
      );
  }
};

export default FeaturedPost;
