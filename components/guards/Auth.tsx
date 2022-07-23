import MainLayout from "components/layout/MainLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Auth: FC<Props> = ({ children }) => {
  const { push } = useRouter();
  const { status, data } = useSession({
    required: true,
    onUnauthenticated() {
      push("/signin");
    },
  });

  if (status === "loading" || !data) {
    return (
      <MainLayout>
        <div>Loading...</div>
      </MainLayout>
    );
  }

  return <>{children}</>;
};

export default Auth;
