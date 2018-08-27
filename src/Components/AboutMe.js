/**
 * Technologies - Container a Side Menu with Accordions
 *  Language
 *  Backend
 *  Frontend
 *  Devops
 * About Me Paragraph
 * */

import React, { Component } from 'react';
import {Grid, Menu, Dimmer, Image, Button, Header} from 'semantic-ui-react'
import TechnologyAccordion from './Technology'

export default class AboutMe extends Component {
  render() {
    return (
      <Grid stackable centered style={{backgroundColor: "blue", height: "100vh"}}>

        <Grid.Row >
          <Grid.Column verticalAlign='middle'>
          <h1> About Me</h1>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row stretched columns={2} style={{height: '100%'}}>
          <Grid.Column stretched width={3} style={{backgroundColor: "white"}}>
            <TechnologyAccordion/>
          </Grid.Column>
          <Grid.Column stretched width={13} style={{backgroundColor: "green"}}>
            <p>
              Introduction

              About Me

              ETC
            </p>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}