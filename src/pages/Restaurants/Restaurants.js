import React from "react";
import {
  SlickScroll,
  PSideScroll,
  HSideScroll,
  ASideScroll,
} from "../../components";
import { Heading1, Heading2 } from "../../globalStyles";

function Restaurants() {
  // Fetch Data from Node.js (server => index.js)
  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <>
      {/* Heading1 used to say Top Restaurants! */}
      <Heading1>Top Restaurants!</Heading1>
      <SlickScroll />
      <Heading2>Checkout More!</Heading2>
      <PSideScroll />
      <HSideScroll />
      <ASideScroll />
    </>
  );
}

export default Restaurants;
