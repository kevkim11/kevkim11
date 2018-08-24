import React, { Component } from 'react';
import {Grid, Segment, Dimmer, Image, Button, Header} from 'semantic-ui-react'

export default class Introduction extends Component {
  render(){
    return(
      <Grid centered style={{backgroundColor: "black", height: "100vh"}}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column verticalAlign="middle">
          <h1 style={{color: "white"}}> Kevin Kim </h1>
          <h2 style={{color: "white"}}> Software Developer and Data Scientist </h2>
            <div className='button-group'>
              <Button>
                Github
              </Button>
              <Button>
                LinkedIn
              </Button>
              <Button>
                Instagram
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}