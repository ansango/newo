import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";

const Profile = () => {
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Perfil" />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Profile;
