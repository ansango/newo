import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import { Icon } from "components/common/Icons";
import Link from "next/link";
import { useGetExercisesQuery } from "@/store/api/exercises";

const Exercises = () => {
  const { data } = useGetExercisesQuery();
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Ejercicios" />
        <div className="flex w-full justify-end">
          <Link href="/dashboard/admin/exercises/create" passHref>
            <button className="btn btn-square btn-primary">
              <Icon kind="outline" icon="PlusIcon" className="w-5 h-5" />
            </button>
          </Link>
        </div>
        <div>
          {data?.map((exercise) => (
            <div key={exercise.id}>{exercise.name}</div>
          ))}
        </div>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Exercises;
