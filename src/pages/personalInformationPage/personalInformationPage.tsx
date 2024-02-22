import { Page } from '@/components/ui/page'
import { useMeQuery, useUpdateProfileMutation } from '@/features/auth/api'
import { PersonalInformation, ProfileDataType } from '@/features/profile/ui/personalInformation'
import { ChangeNameFormValues } from '@/features/profile/ui/personalInformation/changeNameForm/useChangeName'

export const UpdateProfilePage = () => {
  const { data } = useMeQuery()

  const [updateProfile] = useUpdateProfileMutation()

  const onUpdate = (data: ChangeNameFormValues) => {
    const form = new FormData()

    Object.keys(data).forEach(key => {
      form.append(key, data[key as keyof ChangeNameFormValues])

      updateProfile(form)
    })
  }

  return (
    <Page>
      <PersonalInformation profileData={data as ProfileDataType} updateProfile={onUpdate} />
    </Page>
  )
}
