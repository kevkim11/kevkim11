import React, { Component } from 'react';
import {Grid, Item} from 'semantic-ui-react'
import Project from '../Project'

/**
 * Porfolio
 *  Title
 *  Item.Group
 *    Item = Projects
 * */

/**
 * Projects:
 *  Apeiron
 *  Money Shot
 *  testnet.lamden.io
 * */

const DATA = {

}

const STYLE = {

}

export default class Portfolio extends Component {
  render() {
    return (
      <Grid stackable centered style={{backgroundColor: "orange"}}>
        <Grid.Row style={{backgroundColor: "grey"}}>
          <Grid.Column verticalAlign='middle' style={{height: '30%'}}>
            <h1> Portfolio </h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column>
            <Project/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )}
}