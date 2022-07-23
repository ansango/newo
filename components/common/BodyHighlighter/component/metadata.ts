export const MuscleType = {
  TRAPEZIUS: "trapezius",
  UPPER_BACK: "upper-back",
  LOWER_BACK: "lower-back",
  CHEST: "chest",
  BICEPS: "biceps",
  TRICEPS: "triceps",
  FOREARM: "forearm",
  BACK_DELTOIDS: "back-deltoids",
  FRONT_DELTOIDS: "front-deltoids",
  ABS: "abs",
  OBLIQUES: "obliques",
  ABDUCTOR: "adductor",
  ABDUCTORS: "abductors",
  HAMSTRING: "hamstring",
  QUADRICEPS: "quadriceps",
  CALVES: "calves",
  GLUTEAL: "gluteal",
  HEAD: "head",
  NECK: "neck",
  KNEES: "knees",
  LEFT_SOLEUS: "left-soleus",
  RIGHT_SOLEUS: "right-soleus",
} as const;

export type Muscle = typeof MuscleType[keyof typeof MuscleType];

export const ModelPosition = {
  POSTERIOR: "posterior",
  ANTERIOR: "anterior",
} as const;

export type ModelType = typeof ModelPosition[keyof typeof ModelPosition];

export interface ExerciseData {
  name: string;
  muscles: Muscle[];
  frequency?: number;
}

export interface MuscleData {
  exercises: string[];
  frequency: number;
}

export interface MuscleStats {
  muscle: Muscle;
  data: MuscleData;
}
