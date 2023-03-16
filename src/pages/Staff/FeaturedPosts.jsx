import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from "@chakra-ui/react";
import { Staff } from "../../settings/setting";
const FeaturedPosts = () => {
  const listOfIdeas = useSelector((state) => state.ideaReducer.listOfIdeas);
  const signedInAccount = useSelector(
    (state) => state.accountReducer.signedInAccount
  );

  return (
    <>
      <Helmet>
        <title>IDEALLi</title>
      </Helmet>
      <div className="staff-featuredposts pt-5">
        <div className="staff-featuredposts-detail">
          <Tabs isFitted variant="enclosed">
            <TabList className="staff-tabname">
              <Tab _selected={{ bg: "white" }} color="blue.500">
                Featured Idea Posts
              </Tab>
              <Tab _selected={{ bg: "white" }} color="purple.500">
                Most Viewed Idea Posts
              </Tab>
              <Tab _selected={{ bg: "white" }} color="pink.500">
                Most Commented Idea Posts
              </Tab>
              <Tab _selected={{ bg: "white" }} color="green.500">
                Most Like Idea Posts
              </Tab>
              <Tab _selected={{ bg: "white" }} color="red.500">
                Most Dislike Idea Posts
              </Tab>
            </TabList>
            <TabPanels className="bg-white">
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
                <p>four!</p>
              </TabPanel>
              <TabPanel>
                <p>five!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;
