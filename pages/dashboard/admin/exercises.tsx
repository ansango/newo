import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import { PrismaClient, Prisma } from "@prisma/client";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const exercises = await prisma.exercise.findMany({
    where: { userId: "62dc13e3a5a78cb9fc4ca059" },
  });

  return {
    props: { exercises },
  };
}

const Exercises = ({ exercises }: any) => {
  console.log(exercises);
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Ejercicios" />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Exercises;
