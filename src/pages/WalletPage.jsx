import React from "react";
import { Box, Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { palette } from "@mui/system";
import { Typography } from "@mui/material";
import PurchaseList from "../components/Investments/PurchasedList";
import RemainingFunds from "../components/RemainingFunds";
import TotalInvested from "../components/TotalInvested";
import Funds from "../components/Funds";
import Price from "../components/Price";
// import Watchlist from "../components/Watchlist/RenderItems";
import CryptoItem from "../components/CryptoItem";
import Cryptodisplay from "../components/cryptodisplaying/index";
import cryptoinfo from "../components/cryptoinfoing.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Wallet = () => {
  const dateBuilder = () => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
    ]
    let d = new Date()
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  };
  return (
    <Container maxWidth="sm">
      {/* <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
          Wallet
        </Typography> */}

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 12">
          <Item>
          <RemainingFunds />
          </Item>
        </Box>
        <Box gridColumn="span 6">
          <Item>
          <Funds />
          </Item>
        </Box>
        <Box gridColumn="span 6">
          <Item>
            <TotalInvested />
          </Item>
        </Box>
        <Box gridColumn="span 12">
          <Item>{dateBuilder()}</Item>
        </Box>
      </Box>

      <Typography variant="h5" marginTop={5} marginBottom={3}>
        History
      </Typography>
      <Box>
        <Box>
          {/* <Price crypto={props.abr.toUpperCase()} /> */}
          {/* {selected.map((element) => (
          <CryptoItem
            name={findName(element)}
            abr={element}
            size="40px"
            key={findId(element)}
            // handleRemove={handleRemove}
            
          />
        ))} */}
        </Box>
      </Box>
    </Container>
  );
};

export default Wallet;
