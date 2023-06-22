import { Box, Button, Divider, Grid, Text, Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const LandingPage = () => {
  const [companyInfo, setCompanyInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/companyinfo");
        if (response.ok) {
          const data = await response.json();
          setCompanyInfo(data);
          console.log("Fetched Company Information:", data);
        } else {
          throw new Error("Failed to fetch company information");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!companyInfo) {
    return <div>Loading...</div>;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "white",
        padding: 15,
        borderRadius: 12,
      }}
    >
      <Box
        sx={{
          padding: 5,
          border: "0.1px solid  #E0E0E0",
          borderRadius: "12px",
        }}
      >
        <Box
          sx={{
            textAlign: "left",
            height: 40,
            padding: 15,
          }}
        >
          <Title order={3} size="h2">
            Company Information
          </Title>
        </Box>
        <Box
          sx={{
            textAlign: "left",
            padding: 10,
          }}
        >
          {companyInfo.map((info, index) => (
            <>
              <Box
                sx={{
                  textAlign: "left",
                  marginTop: 10,
                  padding: 10,
                }}
              >
                <Grid grow gutter="xs">
                  <Grid.Col span={4}>
                    <Box>
                      <Text fz="xs" c="#ADADAD">
                        Operating Company
                      </Text>
                      <Text fw={700}>{info.operatingCompany}</Text>
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Box>
                      <Text fz="xs" c="#ADADAD">
                        Company Type:
                      </Text>
                      <Text fw={700}>{info.companyType}</Text>
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Box>
                      <Text fz="xs" c="#ADADAD">
                        Law Firm Or Business Name:
                      </Text>
                      <Text fw={700}>{info.lawFirmOrBusinessName}</Text>
                    </Box>
                  </Grid.Col>
                </Grid>

                <Box
                  sx={{
                    marginTop: 15,
                    marginBottom: 20,
                  }}
                >
                  <Text fz="xs" c="#ADADAD">
                    Address1
                  </Text>
                  <Title order={3} size="h3">
                    Company Address
                  </Title>
                </Box>

                <Grid grow gutter="xs" mb={10}>
                  <Grid.Col span={4}>
                    <Box>
                      <Text fz="xs" c="#ADADAD">
                        State
                      </Text>
                      <Text fw={700}>{info.state}</Text>
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Box>
                      <Text fz="xs" c="#ADADAD">
                        City
                      </Text>
                      <Text fw={700}>{info.city}</Text>
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Box>
                      <Text fz="xs" c="#ADADAD">
                        Country
                      </Text>
                      <Text fw={700}>{info.country}</Text>
                    </Box>
                  </Grid.Col>
                </Grid>
              </Box>
              <Divider my="sm" variant="dashed" />
              <Title order={3} size="h3" mb={10} p={10}>
                Law firm information
              </Title>

              <Grid p={10}>
                <Grid.Col span={4} mb={15}>
                  <Box>
                    <Text fz="xs" c="#ADADAD">
                      Firm speciality
                    </Text>
                    <Text fw={700}>{info.firmspeciality}</Text>
                  </Box>
                </Grid.Col>
                <Grid.Col span={6} p={10}>
                  <Box>
                    <Text fz="xs" c="#ADADAD">
                      Case managment
                    </Text>
                    <Text fw={700}>{info.casemanagment}</Text>
                  </Box>
                </Grid.Col>
              </Grid>
              <Grid p={10}>
                <Grid.Col span={4}>
                  <Box>
                    <Text fz="xs" c="#ADADAD">
                      Account Manager
                    </Text>
                    <Text fw={700}>{info.accountmanager}</Text>
                  </Box>
                </Grid.Col>
              </Grid>

              <Divider my="sm" variant="dashed" />
              <Title order={3} size="h3" mb={15} p={10}>
                Company notification settings
              </Title>

              <Grid grow gutter="xs" p={10}>
                <Grid.Col span={4}>
                  <Box>
                    <Text fz="xs" c="#ADADAD">
                      New user invited
                    </Text>
                    <Text fw={700}>{info.newuserinvited}</Text>
                  </Box>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Box>
                    <Text fz="xs" c="#ADADAD">
                      New user added
                    </Text>
                    <Text fw={700}>{info.newuseradded}</Text>
                  </Box>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Box>
                    <Text fz="xs" c="#ADADAD">
                      Payment method changed
                    </Text>
                    <Text fw={700}>{info.paymentmethodchanged}</Text>
                  </Box>
                </Grid.Col>
              </Grid>
              <Divider my="sm" variant="dashed" />
            </>
          ))}
        </Box>

        <Box sx={{ justifyContent: "end", marginBottom: 10 }}>
          <Button
            rightIcon={<AiOutlineArrowRight size="1rem" />}
            sx={{ backgroundColor: "#e4c441", color: "black" }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
