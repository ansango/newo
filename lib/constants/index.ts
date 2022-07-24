import { Muscle } from "components/common/BodyHighlighter";
import { type ExerciseCategory } from "lib/models";

type Selector = {
  label: ExerciseCategory;
  value: ExerciseCategory;
};

const categories: Selector[] = [
  {
    label: "strength",
    value: "strength",
  },
  {
    label: "other",
    value: "other",
  },
];

const muscles: {
  label: Muscle;
  value: Muscle;
}[] = [
  {
    label: "trapezius",
    value: "trapezius",
  },
  {
    label: "upper-back",
    value: "upper-back",
  },
  {
    label: "lower-back",
    value: "lower-back",
  },
  {
    label: "chest",
    value: "chest",
  },
  {
    label: "biceps",
    value: "biceps",
  },
  {
    label: "triceps",
    value: "triceps",
  },
  {
    label: "forearm",
    value: "forearm",
  },
  {
    label: "back-deltoids",
    value: "back-deltoids",
  },
  {
    label: "front-deltoids",
    value: "front-deltoids",
  },
  {
    label: "abs",
    value: "abs",
  },
  {
    label: "obliques",
    value: "obliques",
  },
  {
    label: "adductor",
    value: "adductor",
  },
  {
    label: "abductors",
    value: "abductors",
  },
  {
    label: "hamstring",
    value: "hamstring",
  },
  {
    label: "quadriceps",
    value: "quadriceps",
  },
  {
    label: "calves",
    value: "calves",
  },
  {
    label: "gluteal",
    value: "gluteal",
  },
  {
    label: "head",
    value: "head",
  },
  {
    label: "neck",
    value: "neck",
  },
  {
    label: "knees",
    value: "knees",
  },
  {
    label: "left-soleus",
    value: "left-soleus",
  },
  {
    label: "right-soleus",
    value: "right-soleus",
  },
];

export { categories, muscles };
