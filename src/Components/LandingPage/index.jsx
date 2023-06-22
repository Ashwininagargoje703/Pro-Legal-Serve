import { Box, Divider, Text } from "@mantine/core";
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
    <Box
      sx={{
        textAlign: "left",
      }}
    >
      <Text>Company Information</Text>
      {companyInfo.map((info, index) => (
        <>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Box>
                <Text>Operating Company:</Text>
                <Text>{info.operatingCompany}</Text>
              </Box>
              <Box>
                <Text>Company Type:</Text>
                <Text>{info.companyType}</Text>
              </Box>

              <Box>
                <Text>Law Firm Or Business Name:</Text>
                <Text>{info.lawFirmOrBusinessName}</Text>
              </Box>
            </Box>

            <Box>
              <Text>Address1</Text>
              <Text>Address1</Text>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Box>
                <Text>State</Text>
                <Text>{info.state}</Text>
              </Box>

              <Box>
                <Text>City</Text>
                <Text>{info.city}</Text>
              </Box>
              <Box>
                <Text>Country</Text>
                <Text>{info.country}</Text>
              </Box>
            </Box>
          </Box>
          <Divider my="sm" variant="dashed" />
          <Text>Law firm information</Text>

          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Box>
                <Text>Firm speciality</Text>
                <Text>{info.firmspeciality}</Text>
              </Box>

              <Box>
                <Text>Case managment</Text>
                <Text>{info.casemanagment}</Text>
              </Box>
            </Box>
          </Box>

          <Divider my="sm" variant="dashed" />
          <Text>Company notification settings</Text>
          <Divider my="sm" variant="dashed" />
        </>
      ))}
    </Box>
  );
};

export default LandingPage;
