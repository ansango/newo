import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import Themes from "components/pages/dashboard/profile/Themes";
import DashboardLayout from "components/layout/DashboardLayout";
import Model, {
  ExerciseData,
  MuscleStats,
} from "components/common/BodyHighlighter";
import { useCallback } from "react";

const Profile = () => {
  const data: ExerciseData[] = [
    {
      name: "Bench Press",
      muscles: ["chest", "triceps", "front-deltoids"],
      frequency: 1,
    },
    {
      name: "Bench Press",
      muscles: ["biceps"],
      frequency: 3,
    },
    {
      name: "Bench Press",
      muscles: ["head"],
      frequency: 10,
    },
  ];

  const handleClick = useCallback(
    ({ muscle, data }: MuscleStats) => {
      const { exercises, frequency } = data;

      alert(
        `You clicked the ${muscle}! You've worked out this muscle ${frequency} times through the following exercises: ${JSON.stringify(
          exercises
        )}`
      );
    },
    [data]
  );
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Perfil" />
        <Themes />
        <Model data={data} />
        <Model data={data} type="posterior"/>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Profile;
