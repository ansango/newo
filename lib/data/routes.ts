import * as SolidIcons from "@heroicons/react/solid";

type role = "admin" | "user";

type Props = {
  path: string;
  label: string;
  icon: keyof typeof SolidIcons;
  description?: string;
  roles: role[];
};

const userNavRoutes: Props[] = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: "CogIcon",
    roles: ["user"],
  },
];

const routes: Props[] = [
  {
    path: "/exercises",
    label: "Ejercicios",
    icon: "BookOpenIcon",
    roles: ["user"],
  },
  {
    path: "/workouts",
    label: "Entrenamientos",
    icon: "BookOpenIcon",
    roles: ["user"],
  },
];

const routesDashboard: Props[] = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: "CogIcon",
    roles: ["user"],
  },
  {
    path: "/dashboard/profile",
    label: "Perfil",
    icon: "UserIcon",
    description: "Edita tu datos, foto de perfil y contraseña.",
    roles: ["user"],
  },
  {
    path: "/dashboard/collections",
    label: "Entrenamientos",
    icon: "BookmarkIcon",
    description: "Crear, editar y eliminar tus entrenamientos.",
    roles: ["user"],
  },
  {
    path: "/dashboard/favorites",
    label: "Favoritos",
    icon: "HeartIcon",
    description: "Entrenamientos favoritos.",
    roles: ["user"],
  },
  {
    path: "/dashboard/users",
    label: "Usuarios",
    icon: "UserGroupIcon",
    description: "Administrar usuarios.",
    roles: ["admin"],
  },
  {
    path: "/dashboard/exercises",
    label: "Ejercicios",
    icon: "BookOpenIcon",
    description: "Crear, editar y eliminar ejercicios.",
    roles: ["admin"],
  },
];
export { routes, routesDashboard, userNavRoutes };
