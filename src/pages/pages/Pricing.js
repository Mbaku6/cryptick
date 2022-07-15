import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import Helmet from "react-helmet";

import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  Divider as MuiDivider,
  Typography,
} from "@material-ui/core";

import { StarBorder as StarIcon } from "@material-ui/icons";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const CardHeader = styled(MuiCardHeader)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Price = styled.div`
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing(3)}px;
`;

const Header = styled.div`
  padding: ${(props) => props.theme.spacing(6)}px 0;
`;

function Pricing() {
  return (
    <React.Fragment>
      <Helmet title="Pricing" />
      <Typography variant="h3" gutterBottom display="inline">
        Pricing
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Pages
        </Link>
        <Typography>Pricing</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Header>
        <Typography variant="h3" gutterBottom align="center">
          Today's Cryptocurrency Prices by Market Cap
        </Typography>

        <Typography variant="subtitle1" gutterBottom align="center">
          The global crypto market cap is $1.28T
        </Typography>
      </Header>

      <Grid container justify="center">
        <Grid item xs={12} lg={10}>
          <Grid container spacing={6} alignItems="flex-end">
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardHeader
                  title="Bitcoin"
                  titleTypographyProps={{ align: "center" }}
                  pb={0}
                  pt={2}
                />
                <CardContent>
                  <Price>
                    <Typography
                      component="h2"
                      variant="h1"
                      color="textPrimary"
                      align="center"
                      display="inline"
                    >
                      $31,386.80
                    </Typography>
                  </Price>
                  <Typography variant="subtitle1" align="center">
                    Market Cap
                    <br />
                    $597,488,204,111
                    <br />
                    Fully Diluted Market Cap
                    <br />
                    $657,898,667,176
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardHeader
                  title="Free"
                  subheader="Most popular"
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={<StarIcon />}
                  pb={0}
                  pt={2}
                />
                <CardContent>
                  <Price>
                    <Typography
                      component="h2"
                      variant="h1"
                      color="textPrimary"
                      align="center"
                      display="inline"
                    >
                      $15
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      display="inline"
                    >
                      /mo
                    </Typography>
                  </Price>
                  <Typography variant="subtitle1" align="center">
                    20 users included
                    <br />
                    10 GB of storage
                    <br />
                    Help center access
                    <br />
                    Priority email support
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained" color="primary">
                    Get started
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card p={5}>
                <CardHeader
                  title="Enterprise"
                  titleTypographyProps={{ align: "center" }}
                  pb={0}
                  pt={2}
                />
                <CardContent>
                  <Price>
                    <Typography
                      component="h2"
                      variant="h1"
                      color="textPrimary"
                      align="center"
                      display="inline"
                    >
                      $30
                    </Typography>
                    <Typography
                      variant="h5"
                      color="textSecondary"
                      align="center"
                      display="inline"
                    >
                      /mo
                    </Typography>
                  </Price>
                  <Typography variant="subtitle1" align="center">
                    50 users included
                    <br />
                    30 GB of storage
                    <br />
                    Help center access
                    <br />
                    Phone & email support
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                    Contact us
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Pricing;
