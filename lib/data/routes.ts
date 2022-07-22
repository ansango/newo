
import * as SolidIcons from "@heroicons/react/solid";

type Props = {
  path: string;
  label: string;
  icon: keyof typeof SolidIcons;
  description?: string;
};

const userNavRoutes: Props[] = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: "CogIcon",
  },
];

const routes: Props[] = [
  {
    path: "/exercises",
    label: "Ejercicios",
    icon: "BookOpenIcon",
  },
  {
    path: "/workouts",
    label: "Entrenamientos",
    icon: "BookOpenIcon",
  },
];

const routesDashboard: Props[] = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: "CogIcon",
  },
  {
    path: "/dashboard/profile",
    label: "Perfil",
    icon: "UserIcon",
    description: "Editar tu datos personales, foto de perfil y contraseña.",
  },
  {
    path: "/dashboard/my-exercises",
    label: "Mis Ejercicios",
    icon: "BookOpenIcon",
    description: "Editar o eliminar tus recetas.",

  },
  {
    path: "/dashboard/collections",
    label: "Mis Entrenamientos",
    icon: "BookmarkIcon",
    description: "Crear, editar y eliminar tus colecciones.",
  },
  {
    path: "/dashboard/favorites",
    label: "Favoritos",
    icon: "HeartIcon",
    description: "Eliminar recetas de tus favoritos.",
  
  },
];
export { routes, routesDashboard, userNavRoutes };
