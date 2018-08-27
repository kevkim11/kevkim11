/**
 * Semantic UI Accordion Component.
 *
 * Part of 'About Me'
 * */
import React, { Component } from 'react'
import { Accordion, Icon, List, ListIcon } from 'semantic-ui-react'

/*
* Have data in JSON format
* */
const TECHNOLOGY = {

}

export default class TechnologyAccordion extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Programming Language
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <List>
            <List.Item>
              <i aria-hidden='true' className="devicon-python-plain colored"/>
              <span className='content'> Python </span>
            </List.Item>
            <List.Item>
              <i aria-hidden='true' className="devicon-javascript-plain colored"/>
              <span className='content'> Javascript (ES6) </span>
            </List.Item>
            <List.Item>
              <span className='content'> C++ </span>
            </List.Item>
            <List.Item>
              <i aria-hidden='true' className="devicon-ruby-plain colored"/>
              <span className='content'> Ruby </span>
            </List.Item>
            <List.Item>
              <i aria-hidden='true' className="devicon-swift-plain colored"/>
              <span className='content'> Swift </span>
            </List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Backend
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <List>
            <List.Item>
              <i aria-hidden='true' className="devicon-django-plain colored"/>
              <span className='content'> Django </span>
            </List.Item>
            <List.Item>
              <i className="devicon-nodejs-plain colored"/>
              <span className='content'> Node.js </span>
            </List.Item>
            <List.Item>
              <i aria-hidden='true' className="devicon-rails-plain colored"/>
              <span className='content'> Ruby on Rails </span>
            </List.Item>
            <List.Item>
              <i aria-hidden='true' className="devicon-php-plain colored"/>
              <span className='content'> PHP </span>
            </List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Frontend
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <List>
            <List.Item>
              <i aria-hidden='true' className="devicon-react-plain colored"/>
              <span className='content'> React </span>
            </List.Item>
            <List.Item>
              <i className="devicon-html5-plain colored"/>
              <span className='content'> HTML5 </span>
            </List.Item>
            <List.Item>
              <i aria-hidden='true' className="devicon-css3-plain colored"/>
              <span className='content'> CSS3 </span>
            </List.Item>
            <List.Item>
              <i aria-hidden='true' className="devicon-bootstrap-plain colored"/>
              <span className='content'> Bootstrap </span>
            </List.Item>
          </List>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          DevOps
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <List>
            <List.Item>
              <i aria-hidden='true' className="devicon-git-plain colored"/>
              <span className='content'> Git </span>
            </List.Item>
            <List.Item>
              <i className="devicon-heroku-plain colored"/>
              <span className='content'> Heroku </span>
            </List.Item>
            <List.Item>
              <i aria-hidden='true' className="devicon-amazonwebservices-plain colored"/>
              <span className='content'> AWS </span>
            </List.Item>
            <List.Item>
              <i aria-hidden='true' className="devicon-postgresql-plain colored"/>
              <span className='content'> postgresql </span>
            </List.Item>
            <List.Item>
              <i aria-hidden='true' className="devicon-mongodb-plain colored"/>
              <span className='content'> MongoDB </span>
            </List.Item>
          </List>
        </Accordion.Content>
      </Accordion>
    )
  }
}