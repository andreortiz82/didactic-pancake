import { Button, Card, Flex, Image, Tag } from "antd";
import React, { useState } from "react";
import { Navigation } from "../Navigation";
import confetti from "canvas-confetti";
import { NavLink } from "react-router-dom";

const Widget = () => {
  const [state, setState] = useState(true);

  const fireConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 360,
    });

    setState(!state);
  };

  return (
    <Flex align="center" gap={16}>
      <Button onClick={() => fireConfetti()}>Toggle State</Button>
      <pre>{JSON.stringify({ state })}</pre>
    </Flex>
  );
};

export const Page1 = () => {
  return (
    <main>
      <Navigation />
      <section className="py-8 w-1/2 m-auto">
        <h1 className="text-3xl font-bold block mb-4">Page 1</h1>
        <NavLink to={"/page-2"}>
          <span className="text-blue-500">Continue to next page</span>
        </NavLink>
      </section>
    </main>
  );
};

export const Page2 = () => {
  return (
    <main>
      <Navigation />
      <section className="py-8 w-1/2 m-auto">
        <h1 className="text-3xl font-bold block mb-4">Page 2</h1>
        <Widget />
      </section>
    </main>
  );
};
