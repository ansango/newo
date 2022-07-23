import ButtonGoogle from "components/common/Button/ButtonGoogle";
import ButtonLink from "components/common/Button/ButtonLink";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import { Form, Input } from "components/common/Forms";
import React, { FC, useCallback } from "react";
import SigInButton from "./SigInButton";

type Props = {};

const SignInForm: FC<Props> = ({}) => {
  return (
    <Form onSubmit={() => {}}>
      <CardBasicContent>
        <Input
          name="email"
          label="Tu correo"
          type="email"
          options={{
            required: { value: true, message: "Introduce un email" },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Introduce un email valido",
            },
          }}
        />
        <SigInButton />
        <div className="divider">O accede con</div>
        <ButtonGoogle isFull label="Google" />
      </CardBasicContent>
    </Form>
  );
};

export default SignInForm;
