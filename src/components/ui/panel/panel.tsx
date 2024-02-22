import { ThrashIcon } from '@/assets'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher } from '@/components/ui/tab-switcher'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './panel.module.scss'

export const Panel = () => {
  const classNames = {
    button: clsx(s.button),
    input: clsx(s.input),
    root: clsx(s.root),
    tabs: clsx(s.tabs),
  }

  const tabs = [
    { label: 'My Cards', value: 'My' },
    { label: 'All Cards', value: 'All' },
  ]

  return (
    <div className={classNames.root}>
      <Input className={classNames.input} placeholder={'Search'} variant={'search'} />
      <TabSwitcher className={classNames.tabs} label={'Show packs cards'} tabs={tabs} />
      <Slider label={'Number of cards'} />
      <Button className={classNames.button} variant={'secondary'}>
        <ThrashIcon size={16} />
        <Typography as={'span'} variant={'subtitle2'}>
          Clear Filter
        </Typography>
      </Button>
    </div>
  )
}
