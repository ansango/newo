import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import { routesDashboard } from "lib/constants/routes";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";

import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="¿Qué quieres hacer?" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {routesDashboard
            .filter(({ roles }) => roles.includes("user"))
            .map(({ label, path, description }, index) => {
              if (path === "/dashboard") return null;
              const cn = `card w-full shadow-xl image-full opacity-90 glass shadow-md bg-secondary-focus hover:bg-secondary-focus text-secondary-content`;
              return (
                <li key={index} className="cursor-pointer">
                  <Link href={path} passHref>
                    <div className={cn}>
                      <figure className="w-full h-44 lg:h-40 relative"></figure>
                      <div className="card-body p-5">
                        <h2 className="card-title capitalize text-white">
                          {label}
                        </h2>
                        {description && (
                          <p className="line-clamp-3 text-white">
                            {description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          {routesDashboard
            .filter(({ roles }) => roles.includes("admin"))
            .map(({ label, path, description }, index) => {
              if (path === "/dashboard") return null;
              const cn = `card w-full shadow-xl image-full opacity-90 card w-full shadow-xl image-full opacity-90 glass shadow-md bg-secondary-focus hover:bg-secondary-focus text-secondary-content`;
              return (
                <li key={index} className="cursor-pointer">
                  <Link href={path} passHref>
                    <div className={cn}>
                      <figure className="w-full h-44 lg:h-40 relative"></figure>
                      <div className="card-body p-5">
                        <h2 className="card-title capitalize text-white">
                          {label}
                        </h2>
                        {description && (
                          <p className="line-clamp-3 text-white">
                            {description}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Dashboard;
