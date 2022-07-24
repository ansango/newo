import { authSelector } from "@/store/features/auth";
import formatDate from "@/utils/formatDate";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import useTranslation from "next-translate/useTranslation";
import { useSelector } from "react-redux";

const Session = () => {
  const { expires: dataExpires, user } = useSelector(authSelector);
  const { t } = useTranslation("common");
  const merged: any = user &&
    dataExpires && {
      ...user,
      expires: formatDate(dataExpires, t("date-locale")),
    };

  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Sesión" />
        <div className="mockup-code">
          <>
            {merged &&
              Object.keys(merged).map((key, index) => {
                const value = merged[key];
                return (
                  <pre
                    key={key}
                    data-prefix={index + 1}
                    className="line-clamp-1"
                  >
                    <code className="w-2">
                      <span className="capitalize">{key}</span>:{" "}
                      {key !== "roles" ? (
                        <span>{value}</span>
                      ) : (
                        <span>
                          {value.map((val: string, i: number) => (
                            <span key={i} className="badge badge-accent mr-2">
                              {val}
                            </span>
                          ))}
                        </span>
                      )}
                    </code>
                  </pre>
                );
              })}
          </>
        </div>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Session;
