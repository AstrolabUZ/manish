import React from "react";
import Academy from "./_components/Academy/Academy";
import Contacts from "./_components/Contacts/Contacts";
import Courses from "./_components/Courses/Courses";
import Hero from "./_components/Hero/Hero";
import Partners from "./_components/Partners/Partners";
import Team from "./_components/Team/Team";

const Home = ({setMessage}) => {
  return (
    <>
      <Hero />
      <Academy />
      <Courses />
      <Partners />
      <Team />
      <Contacts setMessage={setMessage}/>
    </>
  );
};

export default Home;
