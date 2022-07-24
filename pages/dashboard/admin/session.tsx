import fetcher from "@/utils/fetcher";
import formatDate from "@/utils/formatDate";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import useTranslation from "next-translate/useTranslation";

export const getServerSideProps = async ({ req, res }: any) => {
  const url = `${process.env.NEXTAUTH_URL}/api/session`;
  const data = await fetcher(url, req);
  return {
    props: { data },
  };
};

const Session = ({
  data,
}: {
  data: {
    expires: string;
    user: {
      email: string;
      id: string;
      name: string;
      image: string;
      roles: string[];
    };
  } | null;
}) => {
  const { t } = useTranslation("common");
  const expires = data?.expires && formatDate(data.expires, t("date-locale"));
  const user = data?.user;
  const merged: any = { ...user, expires };

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
