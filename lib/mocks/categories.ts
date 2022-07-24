import { type ExerciseCategory } from "lib/models";

type Selector = {
  label: ExerciseCategory;
  value: ExerciseCategory;
};

const categories: Selector[] = [
  {
    label: "balance",
    value: "balance",
  },
  {
    label: "cardio",
    value: "cardio",
  },
  {
    label: "strength",
    value: "strength",
  },
  {
    label: "other",
    value: "other",
  },
  {
    label: "flexibility",
    value: "flexibility",
  },
];

export { categories };
