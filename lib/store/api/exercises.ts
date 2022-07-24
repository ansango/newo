import { Exercise } from "lib/models/";
import { api } from ".";

type ExercisesResponse = Exercise[];

export const exercisesApi = api.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getExercises: query<ExercisesResponse, void>({
      query: () => "exercises",
    }),
    createExercise: mutation<Exercise, Partial<Exercise>>({
      query: (body) => ({
        url: "exercises/create",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetExercisesQuery, useCreateExerciseMutation } = exercisesApi;
