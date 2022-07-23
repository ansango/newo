import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import { PrismaClient, Prisma } from "@prisma/client";
import Breadcrumb from "components/common/Breadcrumb/Breadcrumb";
import BreadcrumbLink from "components/common/Breadcrumb/BreadcrumbLink";
import BreadcrumbNoLink from "components/common/Breadcrumb/BreadcrumbNoLink";
import CreateExerciseForm from "components/pages/dashboard/admin/exercises/create/CreateExerciseForm";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const exercises = await prisma.exercise.findMany({
    where: { userId: "62dc13e3a5a78cb9fc4ca059" },
  });

  return {
    props: { exercises },
  };
}

const CreateExercises = ({ exercises }: any) => {
  console.log(exercises);
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Ejercicios" />
        <Breadcrumb>
          <BreadcrumbLink
            href="/dashboard/collections"
            label="Ejercicios"
            icon={{ icon: "BookmarkIcon", kind: "outline" }}
          />
          <BreadcrumbNoLink
            label="Crear ejercicio"
            icon={{ icon: "BookmarkAltIcon", kind: "outline" }}
          />
        </Breadcrumb>
        <CreateExerciseForm />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default CreateExercises;
