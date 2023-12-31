import { useEffect, useState } from 'react'

import { Modal, ModalProps } from '@/components/ui/modal/modal'
import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Typography } from '../typography'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const ModalStory = (args: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(args.open)

  useEffect(() => {
    setModalOpen(args.open)
  }, [args.open])

  return (
    <>
      <Button onClick={() => setModalOpen(true)}> Open</Button>
      <Modal open={modalOpen} setOpen={setModalOpen} title={args.title}>
        <div>
          <Typography variant={'body1'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
          </Typography>
        </div>
      </Modal>
    </>
  )
}

export const ModalStoryRender: Story = {
  args: {
    open: false,
    title: 'Story',
  },
  render: (args: ModalProps) => <ModalStory {...args} />,
}
