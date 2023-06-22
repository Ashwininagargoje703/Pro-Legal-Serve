import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Image,
  Avatar,
  Box,
} from "@mantine/core";
import LandingPage from "../LandingPage";
import { MdExpandMore } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 150, lg: 200 }}
        >
          <Text
            fw={600}
            sx={{
              backgroundColor: "#FAF6E7",
              borderRadius: "0px, 10px, 10px, 0px",
              padding: 5,
            }}
          >
            Company Details
          </Text>
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <a href="/">
              <Image
                src={
                  "https://i.ibb.co/R9WT20p/Whats-App-Image-2023-06-22-at-4-58-30-PM.jpg"
                }
                style={{
                  width: 200,
                  height: 80,
                  marginTop: 20,
                }}
              />
            </a>

            <Box display={"flex"}>
              <Box
                sx={{
                  borderRadius: "50%",
                  border: "1px solid #ADADAD",
                  width: 40,
                  height: 40,
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginRight: 20,
                }}
              >
                <FaRegBell fontSize={20} />
              </Box>
              <Avatar
                src={
                  " https://funkylife.in/wp-content/uploads/2023/02/cute-girl-pic-2-1024x1024.jpg"
                }
                radius={48}
              />

              <Box ml={10}>
                <Text fontSize={18} fw={600}>
                  John Deo <MdExpandMore style={{ marginTop: 8 }} />
                </Text>
                <Text fz="xs" c="#ADADAD">
                  Server
                </Text>
              </Box>
            </Box>
          </div>
        </Header>
      }
    >
      <LandingPage />
    </AppShell>
  );
}
