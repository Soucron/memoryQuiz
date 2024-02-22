import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { TabContent } from '@/components/ui/tab-switcher/tab-content'
import { TabButton } from '@/components/ui/tab-switcher/tab-item'
import { Typography } from '@/components/ui/typography'
import { List, Root } from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

export type TabItemType = {
  content?: ReactNode
  disabled?: boolean
  label: string
  value: string
}

type PropsType = {
  label?: string
  onValueChange?: (value: string) => void
  tabs: TabItemType[]
} & ComponentPropsWithoutRef<typeof Root>
export const TabSwitcher = forwardRef<ElementRef<typeof Root>, PropsType>(
  ({ label, tabs }, ref) => {
    return (
      <Root className={s.root} ref={ref}>
        {label && (
          <Typography as={'label'} variant={'body2'}>
            {label}
          </Typography>
        )}
        <List aria-label={'tabs example'} className={s.list}>
          {tabs.map(tab => (
            <TabButton
              disabled={tab.disabled}
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </List>
        {tabs.map(tab => (
          <TabContent key={tab.value} value={tab.value}>
            {tab.content}
          </TabContent>
        ))}
      </Root>
    )
  }
)
