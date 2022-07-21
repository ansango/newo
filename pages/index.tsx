import Container from "components/Container";
import Structure from "components/Structure";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data } = useSession({ required: true });
  const roles = data?.roles as string[];
  console.log(roles.includes("user"));
  return (
    <Container>
      <Structure>
        <div className="space-y-10"></div>
      </Structure>
    </Container>
  );
};

export default Home;
