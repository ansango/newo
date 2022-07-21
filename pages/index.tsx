import Container from "components/Container";
import Structure from "components/Structure";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <Structure>
        <div className="space-y-10">Home</div>
      </Structure>
    </Container>
  );
};

export default Home;
