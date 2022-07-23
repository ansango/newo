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
    description: "Editar tu datos personales, foto de perfil y contraseña.",
    roles: ["user"],
  },
  {
    path: "/dashboard/my-exercises",
    label: "Mis Ejercicios",
    icon: "BookOpenIcon",
    description: "Editar o eliminar tus recetas.",
    roles: ["user"],
  },
  {
    path: "/dashboard/collections",
    label: "Mis Entrenamientos",
    icon: "BookmarkIcon",
    description: "Crear, editar y eliminar tus colecciones.",
    roles: ["user"],
  },
  {
    path: "/dashboard/favorites",
    label: "Favoritos",
    icon: "HeartIcon",
    description: "Eliminar recetas de tus favoritos.",
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
    description: "Editar o eliminar tus recetas.",
    roles: ["admin"],
  },
];
export { routes, routesDashboard, userNavRoutes };
