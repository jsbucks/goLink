import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CreateLinkForm = dynamic(() => import("../components/create-link"), {
  ssr: false,
});

const GetAll = dynamic(() => import("../components/getAll"), {
  ssr: true,
});

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center align-center justify-evenly h-screen bg-gray-950 text-white">
      <Suspense>
        <CreateLinkForm />
        <GetAll />
      </Suspense>
    </div>
  );
};

export default Home;