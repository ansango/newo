import Container from "components/Container";
import Structure from "components/Structure";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

const About: NextPage = () => {
  const { data, status } = useSession();
  const roles = data?.roles as string[] | undefined;
  console.log(roles?.includes("user"));
  return (
    <Container>
      <Structure>
        <div className="space-y-10">About</div>
      </Structure>
    </Container>
  );
};

export default About;
