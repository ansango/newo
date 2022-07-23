import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import Themes from "components/pages/dashboard/profile/Themes";
import DashboardLayout from "components/layout/DashboardLayout";

const Profile = () => {
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Perfil" />
        <Themes />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Profile;
