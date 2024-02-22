import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Content } from '@radix-ui/react-tabs'

import s from './tab-content.module.scss'

type TabContentProps = {
  children: ReactNode
  value: string
} & ComponentPropsWithoutRef<typeof Content>

export const TabContent = forwardRef<ElementRef<typeof Content>, TabContentProps>(
  ({ children, value }, ref) => {
    return (
      <Content className={s.content} ref={ref} value={value}>
        {children}
      </Content>
    )
  }
)
