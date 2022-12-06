import React from 'react'
import {EyeClosedIcon, EyeIcon, SearchIcon, XIcon, HeartIcon, ChevronRightIcon} from '@primer/octicons-react'
import {Story, Meta} from '@storybook/react'
import {Button} from '.'
import {OcticonArgType} from '../utils/story-helpers'

export default {
  title: 'Components/LinkButton',
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large']
      }
    },
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'primary', 'danger', 'invisible', 'outline']
      }
    },
    alignContent: {
      control: {
        type: 'radio',
        options: ['center', 'start']
      }
    },
    block: {
      control: {
        type: 'boolean'
      }
    },
    leadingVisual: OcticonArgType([EyeClosedIcon, EyeIcon, SearchIcon, XIcon, HeartIcon]),
    trailingVisual: OcticonArgType([EyeClosedIcon, EyeIcon, SearchIcon, XIcon, HeartIcon]),
    trailingAction: OcticonArgType([ChevronRightIcon]),
    trailingVisualCount: {
      control: {
        type: 'number'
      }
    },
    href: {control: 'text'}
  },
  args: {
    block: false,
    size: 'medium',
    variant: 'default',
    alignContent: 'center',
    trailingVisual: null,
    leadingVisual: null,
    href: '/'
  }
} as Meta<typeof Button>

export const Playground: Story<typeof Button> = args => (
  <Button as="a" {...args}>
    Default
  </Button>
)
