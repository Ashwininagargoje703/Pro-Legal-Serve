import { Box, Divider, Grid, Text, Title } from "@mantine/core";
import React, { useEffect, useState } from "react";

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
    <>
      <Box
        sx={{
          textAlign: "left",
          height: 40,
        }}
      >
        <Title order={3} size="h2">
          Company Information
        </Title>
      </Box>
      <Box
        sx={{
          textAlign: "left",
        }}
      >
        {companyInfo.map((info, index) => (
          <>
            <Box
              sx={{
                textAlign: "left",
                marginTop: 10,
              }}
            >
              <Grid grow gutter="xs">
                <Grid.Col span={4}>
                  <Box>
                    <Text fz="xs" c="#ADADAD">
                      Operating Company
                    </Text>
                    <Text>{info.operatingCompany}</Text>
                  </Box>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Box>
                    <Text fz="xs" c="#ADADAD">
                      Company Type:
                    </Text>
                    <Text>{info.companyType}</Text>
                  </Box>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Box>
                    <Text fz="xs" c="#ADADAD">
                      Law Firm Or Business Name:
                    </Text>
                    <Text>{info.lawFirmOrBusinessName}</Text>
                  </Box>
                </Grid.Col>
              </Grid>

              <Box
                sx={{
                  marginTop: 15,
                }}
              >
                <Text fz="xs" c="#ADADAD">
                  Address1
                </Text>
                <Title order={3} size="h4">
                  Company Address
                </Title>
              </Box>

              <Grid grow gutter="xs">
                <Grid.Col span={4}>
                  <Box>
                    <Text fz="xs" c="#ADADAD">
                      State
                    </Text>
                    <Text>{info.state}</Text>
                  </Box>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Box>
                    <Text fz="xs" c="#ADADAD">
                      City
                    </Text>
                    <Text>{info.city}</Text>
                  </Box>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Box>
                    <Text fz="xs" c="#ADADAD">
                      Country
                    </Text>
                    <Text>{info.country}</Text>
                  </Box>
                </Grid.Col>
              </Grid>
            </Box>
            <Divider my="sm" variant="dashed" />
            <Title order={3} size="h2">
              Law firm information
            </Title>

            <Grid>
              <Grid.Col span={4}>
                <Box>
                  <Text fz="xs" c="#ADADAD">
                    Firm speciality
                  </Text>
                  <Text>{info.firmspeciality}</Text>
                </Box>
              </Grid.Col>
              <Grid.Col span={6}>
                <Box>
                  <Text fz="xs" c="#ADADAD">
                    Case managment
                  </Text>
                  <Text>{info.casemanagment}</Text>
                </Box>
              </Grid.Col>
            </Grid>

            <Divider my="sm" variant="dashed" />
            <Title order={3} size="h2">
              Company notification settings
            </Title>

            <Grid grow gutter="xs">
              <Grid.Col span={4}>
                <Box>
                  <Text fz="xs" c="#ADADAD">
                    New user invited
                  </Text>
                  <Text>{info.newuserinvited}</Text>
                </Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box>
                  <Text fz="xs" c="#ADADAD">
                    New user added
                  </Text>
                  <Text>{info.newuseradded}</Text>
                </Box>
              </Grid.Col>
              <Grid.Col span={4}>
                <Box>
                  <Text fz="xs" c="#ADADAD">
                    Payment method changed
                  </Text>
                  <Text>{info.paymentmethodchanged}</Text>
                </Box>
              </Grid.Col>
            </Grid>
            <Divider my="sm" variant="dashed" />
          </>
        ))}
      </Box>
    </>
  );
};

export default LandingPage;
