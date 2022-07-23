import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import { PrismaClient, Prisma } from "@prisma/client";
import { Icon } from "components/common/Icons";
import Link from "next/link";

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
        <div className="flex w-full justify-end">
          <Link href="/dashboard/admin/exercises/create" passHref>
            <button className="btn btn-square btn-primary">
              <Icon kind="outline" icon="PlusIcon" className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Exercises;
