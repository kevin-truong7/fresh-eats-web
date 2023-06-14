import React from "react";
import { Button } from "../../globalStyles";
import {
  LoginContainer,
  LoginBlock,
  Form,
  FormInput,
  LoginHeading,
} from "./Login.elements";

function LogIn() {
  return (
    <LoginContainer>
      <LoginHeading>Whats your email or phone number?</LoginHeading>
      <LoginBlock>
        <Form>
          <FormInput
            name="email"
            type="email"
            placeholder="Enter Email or Phone"
          />
          <Button fontBig>LogIn</Button>
        </Form>
      </LoginBlock>
      {/* <LoginSubHeading>or</LoginSubHeading> */}
    </LoginContainer>
  );
}

export default LogIn;
