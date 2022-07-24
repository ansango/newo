import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import Breadcrumb from "components/common/Breadcrumb/Breadcrumb";
import BreadcrumbLink from "components/common/Breadcrumb/BreadcrumbLink";
import BreadcrumbNoLink from "components/common/Breadcrumb/BreadcrumbNoLink";
import CreateExerciseForm from "components/pages/dashboard/admin/exercises/create/CreateExerciseForm";

const CreateExercises = () => {
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Crear ejercicio" />
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
