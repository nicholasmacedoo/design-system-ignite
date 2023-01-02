import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typhography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore doloribus laborum ad, aliquam vel nesciunt aperiam necessitatibus et harum sed sit nobis quae, aspernatur explicabo! Quam porro laborum odit?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong tag',
    as: 'strong',
  },
}
