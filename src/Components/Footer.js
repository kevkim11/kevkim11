import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'

export default class Footer extends Component {
  render() {
    return (
      <Grid stackable centered style={{backgroundColor: "grey", height: "300px"}}>
        <Grid.Row>
          <h1> FOOTER </h1>
        </Grid.Row>
      </Grid>
    )}
}