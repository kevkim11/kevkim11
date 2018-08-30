/**
 * Semantic UI Accordion Component.
 *
 * Part of 'About Me'
 * */
import React, { Component } from 'react'
import { Item, Image } from 'semantic-ui-react'


const ItemExampleItems = () => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src='/img/image.png' />

      <Item.Content>
        <Item.Header as='a'>Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <Image src='/img/short-paragraph.png' />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

const items = [
  {
    childKey: 0,
    image: {src: '/img/image.png', size: 'medium'},
    header: 'Apeiron.io',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 1,
    image: {src: '/img/image.png', size: 'medium'},
    header: 'Connext',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 2,
    image: {src: '/img/image.png', size: 'medium'},
    header: 'Lamden.io',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
]

const ItemExampleProps = () => <Item.Group items={items} />

export default ItemExampleProps