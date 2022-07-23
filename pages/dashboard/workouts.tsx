import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";

const Workouts = () => {
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Entrenamientos" />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Workouts;
