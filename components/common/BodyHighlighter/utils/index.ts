import { ExerciseData, MuscleData, Muscle } from "../component/metadata";
import { DEFAULT_MUSCLE_DATA } from "../constants";

/**
 * Function which determines color of muscle based on how often it has been exercised
 */

export const fillIntensityColor = (
  activityMap: Record<Muscle, MuscleData>,
  highlightedColors: string[],
  muscle: Muscle
): string | undefined => {
  const frequency = activityMap[muscle]?.frequency;

  if (frequency == null || frequency === 0) {
    return undefined;
  }

  return highlightedColors[
    Math.min(highlightedColors.length - 1, frequency - 1)
  ];
};

/**
 * Function which generates object with muscle data
 */
export const fillMuscleData = (
  data: ExerciseData[]
): Record<Muscle, MuscleData> => {
  return data.reduce((acc, exercise: ExerciseData) => {
    for (const muscle of exercise.muscles) {
      acc[muscle].exercises = [...acc[muscle].exercises, exercise.name];
      acc[muscle].frequency += exercise.frequency || 1;
    }

    return acc;
  }, JSON.parse(JSON.stringify(DEFAULT_MUSCLE_DATA)));
};
