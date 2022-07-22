import { useRouter } from "next/router";
// import Link from "next/link";

import PageWrapper from "../components/layout/PageWrapper";

const Home = () => {
  const router = useRouter();

  return (
    <PageWrapper>
      <div>Testing</div>
    </PageWrapper>
  );
};

export default Home;
