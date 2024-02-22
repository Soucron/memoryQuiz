import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const changeNameSchema = z.object({
  name: z.string().min(3, 'Use 3 or more characters for your name'),
})

export type ChangeNameFormValues = z.infer<typeof changeNameSchema>

export const useChangeName = (initialValues: ChangeNameFormValues = { name: '' }) =>
  useForm<ChangeNameFormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(changeNameSchema),
  })
