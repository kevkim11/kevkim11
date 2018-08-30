/**
 * Technologies - Container a Side Menu with Accordions
 *  Language
 *  Backend
 *  Frontend
 *  Devops
 * About Me Paragraph
 * */

// TODO TEXT ALIGHT - https://react.semantic-ui.com/elements/container/
import React, { Component } from 'react';
import {Grid, Menu, Dimmer, Image, Button, Header} from 'semantic-ui-react'
import TechnologyAccordion from './Technology'

export default class AboutMe extends Component {
  render() {
    return (
      <Grid stackable centered style={{backgroundColor: "blue"}}>

        <Grid.Row >
          <Grid.Column verticalAlign='middle'>
          <h1> About Me</h1>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row stretched columns={2}>
          <Grid.Column width={3} style={{backgroundColor: "white"}}>
            <TechnologyAccordion/>
          </Grid.Column>
          <Grid.Column width={13} style={{backgroundColor: "green"}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra, tortor eget ullamcorper pretium, odio felis imperdiet nisl, a consequat nisi nulla nec nunc. Aenean vulputate orci vel ligula eleifend euismod. Aenean venenatis est a dolor pharetra fermentum. Pellentesque sagittis pretium sapien, nec efficitur neque fermentum vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus aliquam justo et egestas. Duis vehicula lectus quis tellus mollis, eu finibus neque luctus. Nulla ac libero vestibulum quam semper aliquet ut tempus libero. Duis maximus mauris vitae tristique tincidunt. Sed bibendum sapien eget ligula sagittis venenatis id eget libero. Duis aliquet efficitur mi sit amet ullamcorper. Nulla sed ornare augue. Phasellus volutpat nisl lacus. Nulla facilisi. Donec egestas felis mauris, ut faucibus arcu tincidunt cursus. Etiam magna neque, dictum ut facilisis eget, tempor at purus.

              Curabitur quis mi eget enim luctus commodo. In in libero at lacus luctus pharetra ut a ante. Etiam dui lectus, iaculis at iaculis sed, auctor ac diam. Vivamus eget facilisis arcu. Ut sodales felis pharetra, egestas arcu mattis, euismod mauris. Aliquam erat volutpat. Praesent facilisis luctus erat, vel scelerisque augue egestas quis. Maecenas ac elementum mi. Sed convallis ipsum ut sodales condimentum.
            </p>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}