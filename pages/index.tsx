import Container from "components/Container";
import Structure from "components/Structure";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const status = useSession({ required: true });
  console.log(status.data?.user);
  return (
    <Container>
      <Structure>
        <div className="space-y-10"></div>
      </Structure>
    </Container>
  );
};

export default Home;
