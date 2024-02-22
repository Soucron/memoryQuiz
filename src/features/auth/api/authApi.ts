import {
  AuthResponseType,
  LoginResponseType,
  RecoverPasswordParamsType,
  ResetPasswordParamsType,
  SignInDataType,
  SignUpDataType,
} from '@/features/auth/api/authApi.types'
import { baseApi } from '@/services/baseApi'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponseType, SignInDataType>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/login',
      }),
    }),
    logout: builder.mutation<void, void>({
      invalidatesTags: ['Me'],
      query: () => ({
        method: 'POST',
        url: 'auth/logout',
      }),
    }),
    me: builder.query<AuthResponseType | null, void>({
      providesTags: ['Me'],
      query: () => 'auth/me',
    }),
    recoverPassword: builder.mutation<void, RecoverPasswordParamsType>({
      query: params => ({
        body: {
          email: params.email,
          html: '<h1>Hi, ##name##</h1><p>Click <a href="##token##">here</a> to recover your password</p>',
          subject: 'Recover Password',
        },
        method: 'POST',
        url: 'auth/recover-password',
      }),
    }),
    resetPassword: builder.mutation<void, ResetPasswordParamsType>({
      query: ({ password, token }) => ({
        body: { password },
        method: 'POST',
        url: `auth/reset-password/${token}`,
      }),
    }),
    signUp: builder.mutation<AuthResponseType, SignUpDataType>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/sign-up',
      }),
    }),
    updateProfile: builder.mutation<AuthResponseType, FormData>({
      invalidatesTags: ['Me'],
      query: body => ({
        body,
        method: 'PATCH',
        url: 'auth/me',
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useRecoverPasswordMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateProfileMutation,
} = authApi
