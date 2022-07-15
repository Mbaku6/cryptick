import React from "react";
import styled from "styled-components/macro";

import { Helmet } from "react-helmet";

import {
  Divider as MuiDivider,
  Grid,
  Typography as MuiTypography
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { green, red } from "@material-ui/core/colors";

import Actions from "./Actions";
import Stats from "./Stats";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function SaaS() {
  return (
    <React.Fragment>
      <Helmet title="SaaS Dashboard" />
      <Grid justify="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Cryptocurrency Overview
          </Typography>
          {/* <Typography variant="subtitle1">
            Welcome back, Mubarak bindaina! We've missed you.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography> */}
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Total Raises In BTC Price"
            amount="$37.500"
            chip="Monthly"
            percentageText="+14%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Risk Percentage"
            amount="150.121"
            chip="Annual"
            percentageText="-12%"
            percentagecolor={red[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Total Raises in Ethereum Price"
            amount="12.432"
            chip="Weekly"
            percentageText="+24%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Risk Percentage in Ethereum"
            amount="22"
            chip="Weekly"
            percentageText="-6%"
            percentagecolor={red[500]}
          />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h2">What is Cryptocurrency</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            Cryptocurrency, crypto-currency, crypto, or coin is a digital
            currency designed to work as a medium of exchange through a computer
            network that is not reliant on any central authority, such as a
            government or bank, to uphold or maintain it.{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">
            The Challenges of Valuing Bitcoin
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            One of the biggest issues is Bitcoin's status as a store of value.
            Bitcoin's utility as a store of value depends on how well it works
            as a medium of exchange. If Bitcoin does not achieve success as a
            medium of exchange, it will not be useful as a store of value.
            Throughout much of its history, speculative interest has been the
            primary driver of Bitcoin's value. Bitcoin has exhibited the
            characteristics of a bubble with drastic price run-ups and a craze
            of media attention. This is likely to decline as Bitcoin continues
            to see greater mainstream adoption, but the future is uncertain.
            Difficulties surrounding cryptocurrency storage and exchange spaces
            also challenge Bitcoin's utility and transferability. In recent
            years, hacks, thefts, and fraud have plagued digital currency
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">
            Why Do Some People Believe Bitcoins Are Worthless?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            Like any asset or thing of value, the price that people are willing
            to pay for Bitcoins is a socially-agreed upon level that is also
            based on supply and demand. Because Bitcoins are virtual, only
            existing within computer networks, some people have a hard time
            grasping that Bitcoins are scarce and that they have a cost of
            production. Because of this unwillingness to accept that digital
            traces can hold value in this way, they remain convinced that
            Bitcoins are worthless. Others who understand the Bitcoin system
            agree it is valuable.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Are Bitcoins Fairly Valued?</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            The market price of Bitcoin is highly volatile and subject to large
            price swings. As a result, the market price at any given time may
            vary wildly from its fair or intrinsic value. Still, over time,
            oversold markets tend to rebound and overbought markets cool off.
            Thus, it is impossible to say at any given moment whether Bitcoins
            are fairly valued without the benefit of hindsight.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Is Bitcoin Money?</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            While Bitcoin has several money-like features, economists and
            regulators remain unconvinced that Bitcoin currently acts as money.
            This is because relatively few transactions are conducted in
            Bitcoins and very few things are denominated in Bitcoins. While
            people may trade Bitcoin in large volume and transfer value across
            the network, little commercial activity still takes place.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">
            How Much Does It Cost to Produce 1 BTC?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            The cost to produce one bitcoin depends on the cost of electricity,
            the mining difficulty, the block reward, and the energy efficiency
            of miners. With a block reward of 6.25 BTC, difficulty at 27.5
            trillion, $0.15 per kWh, and energy efficiency of 45 joules per tera
            hash, the cost to produce 1 BTC = $35,500.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">BTC Investment</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">
            Investing in cryptocurrencies and other Initial Coin Offerings
            (“ICOs”) is highly risky and speculative, and this article is not a
            recommendation by Investopedia or the writer to invest in
            cryptocurrencies or other ICOs. Since everyone’s situation is
            unique, a qualified professional should always be consulted before
            making any financial decisions. Investopedia makes no
            representations or warranties as to the accuracy or timeliness of
            the information contained herein. As of the date this article was
            written, the author owns cryptocurrency.
          </Typography>
        </Grid>
      </Grid>

      {/* <Grid container spacing={6}>
        <Grid item xs={12} lg={5}>
          <USAMap />
        </Grid>
        <Grid item xs={12} lg={7}>
          <BarChart />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4}>
          <DoughnutChart />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Table />
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
}

export default SaaS;
