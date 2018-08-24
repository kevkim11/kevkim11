import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'

export default class Portfolio extends Component {
  render() {
    return (
      <Grid stackable centered style={{backgroundColor: "orange", height: "100vh"}}>
        <Grid.Row >
          <Grid.Column verticalAlign='middle'>
            <h1> Portfolio </h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )}
}