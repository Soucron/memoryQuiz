import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Trigger } from '@radix-ui/react-tabs'

import s from './tab-button.module.scss'

type TabButtonProps = {
  label: string
  value: string
} & ComponentPropsWithoutRef<typeof Trigger>

export const TabButton = forwardRef<ElementRef<typeof Trigger>, TabButtonProps>(
  ({ disabled, label, value }, ref) => {
    return (
      <Trigger className={s.trigger} disabled={disabled} key={value} ref={ref} value={value}>
        {label}
      </Trigger>
    )
  }
)
