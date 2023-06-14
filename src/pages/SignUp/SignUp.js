import React from "react";
import { homeObjOne } from "./data";
import { InfoSection } from "../../components";

function SignUp() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjThree} /> */}
    </>
  );
}

export default SignUp;
