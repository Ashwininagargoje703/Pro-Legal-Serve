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
          <Text>Company Details</Text>
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
              <Avatar
                src={
                  " https://funkylife.in/wp-content/uploads/2023/02/cute-girl-pic-2-1024x1024.jpg"
                }
                radius={48}
              />

              <Box>
                <Text fontSize={18}>John Deo</Text>
                <Text fz="xs">Server</Text>
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
