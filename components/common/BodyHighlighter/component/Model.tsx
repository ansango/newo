import { memo } from "react";
import { ModelType, Muscle, ExerciseData, MuscleStats } from "./metadata";
import { anteriorData, posteriorData } from "../assets";
import { fillIntensityColor, fillMuscleData } from "../utils";

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
    <svg width="100%" height="100%" viewBox="0 0 100 200">
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
