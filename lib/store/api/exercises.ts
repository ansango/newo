import { Exercise } from "lib/models/";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from ".";

type ExercisesResponse = Exercise[];

export const exercisesApi = api.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getExercises: query<ExercisesResponse, void>({
      query: () => "exercises",
    }),
  }),
});

export const { useGetExercisesQuery } = exercisesApi;
