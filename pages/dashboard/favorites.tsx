import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";

const Favorites = () => {
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Favoritos" />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Favorites;
