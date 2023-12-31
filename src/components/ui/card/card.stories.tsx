import { Button } from '@/components/ui/button'
import { Meta, StoryObj } from '@storybook/react'

import { Card } from './card'

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Button variant={'primary'}>Submit</Button>,
    style: {
      alignItems: 'center',
      display: 'flex',
      height: '552px',
      justifyContent: 'center',
      width: '420px',
    },
  },
}
