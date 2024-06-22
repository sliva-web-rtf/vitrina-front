import { baseApi } from '@/shared/api';

const projectImagesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
      uploadImages: build.mutation<void, { formData: FormData; id: number }>({
          query: ({ formData, id }) => ({
              method: 'POST',
              url: `project/project/${id}/upload-images`,
              body: formData,
          }),
      }),
      uploadPreviewImage: build.mutation<void, { formData: FormData; id: number }>({
        query: ({ formData, id }) => ({
            method: 'POST',
            url: `project/${id}/upload-preview-images`,
            body: formData,
        }),
    }),
  }),
});

export const { useUploadImagesMutation, useUploadPreviewImageMutation } = projectImagesApi;