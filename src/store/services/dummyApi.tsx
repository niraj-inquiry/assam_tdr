import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utility/basePath.js';

export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
      prepareHeaders: (headers, { getState }: any) => {
        const token = JSON.parse(localStorage.getItem('ADMIN')!)
          ? JSON.parse(localStorage.getItem('ADMIN')!).accessToken
          : '';
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
      },
    }),
    endpoints: (builder) => ({
     signIn:builder.mutation<{}, any>({
      query:(data)=>({
        url:'sign-in',
        method:'POST',
        body:data
      })
     })
    })
})

export const {
  useSignInMutation
}=adminApi