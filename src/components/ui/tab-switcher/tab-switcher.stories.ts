import { TabSwitcher } from '@/components/ui/tab-switcher/tab-switcher'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [
      { label: 'one', value: 'one' },
      { label: 'two', value: 'two' },
      { label: 'three', value: 'three' },
      { label: 'four', value: 'four' },
    ],
  },
}
