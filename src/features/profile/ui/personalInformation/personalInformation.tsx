import { useState } from 'react'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { AvatarUploader } from '@/features/profile/ui/personalInformation/avatarUploader/AvatarUploader'
import { ChangeNameFormValues } from '@/features/profile/ui/personalInformation/changeNameForm/useChangeName'
import { ProfileInfo } from '@/features/profile/ui/personalInformation/profileInfo'
import { clsx } from 'clsx'

import s from './personalInformation.module.scss'

import { ChangeNameForm } from './changeNameForm'

export type ProfileDataType = {
  avatar?: string
  email: string
  name: string
}

type Props = {
  profileData: ProfileDataType
  updateProfile: (data: ChangeNameFormValues) => void
}

export const PersonalInformation = ({ profileData, updateProfile }: Props) => {
  const { avatar, email, name } = profileData
  const classNames = {
    avatar: clsx(s.avatar),
    container: clsx(s.container),
    label: clsx(s.label),
  }

  const [edit, setEdit] = useState(false)
  const onSubmit = (data: ChangeNameFormValues) => {
    updateProfile(data)
    setEdit(false)
  }

  const EditHandler = () => setEdit(true)

  return (
    <Card className={classNames.container}>
      <Typography className={classNames.label} variant={'large'}>
        Personal Information
      </Typography>
      <AvatarUploader avatar={avatar} className={s.avatarUploader} edit={edit} />
      {edit ? (
        <ChangeNameForm onSubmit={onSubmit} />
      ) : (
        <ProfileInfo EditHandler={EditHandler} email={email} name={name} />
      )}
    </Card>
  )
}
