import { memo } from "react";
import { ModelType, Muscle, ExerciseData, MuscleStats } from "./metadata";
import { anteriorData, posteriorData } from "../assets";
import { fillIntensityColor, fillMuscleData } from "../utils";

//  const handleClick = useCallback(
//    ({ muscle, data }: MuscleStats) => {
//      const { exercises, frequency } = data;

//      alert(
//        `You clicked the ${muscle}! You've worked out this muscle ${frequency} times through the following exercises: ${JSON.stringify(
//          exercises
//        )}`
//      );
//    },
//    [data]
//  );

// const data: ExerciseData[] = [
//   {
//     name: "Bench Press",
//     muscles: ["chest", "triceps", "front-deltoids"],
//     frequency: 1,
//   },
//   {
//     name: "Bench Press",
//     muscles: ["biceps"],
//     frequency: 3,
//   },
//   {
//     name: "Bench Press",
//     muscles: ["head"],
//     frequency: 10,
//   },
// ];

type Props = {
  data?: ExerciseData[];
  onClick?: ((exercise: MuscleStats) => void) | (() => void);
  type?: ModelType;
};

const Model = ({ data = [], onClick, type = "anterior" }: Props) => {
  const muscleData = fillMuscleData([...data]);
  const mapData = type === "anterior" ? anteriorData : posteriorData;

  const handleClick = (
    muscle: Muscle,
    callback?: (exercise: MuscleStats) => void
  ) => {
    callback && callback({ muscle, data: muscleData[muscle] });
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 200" className="w-full">
      {mapData.map((exercise) =>
        exercise.svgPoints.map((points, index) => {
          const fill = fillIntensityColor(
            muscleData,
            ["opacity-50", "opacity-75", "opacity-90"],
            exercise.muscle
          );
          const cnPointer = onClick ? "cursor-pointer" : "";
          const cn = fill
            ? `fill-secondary-focus ${fill} ${cnPointer} hover:opacity-100`
            : `fill-primary opacity-20 ${cnPointer}`;
          return (
            <polygon
              className={cn}
              key={index}
              points={points}
              onClick={() => handleClick(exercise.muscle, onClick)}
            />
          );
        })
      )}
    </svg>
  );
};

export default memo(Model);
