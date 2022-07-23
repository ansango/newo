import ButtonGoogle from "components/common/Button/ButtonGoogle";
import ButtonMail from "components/common/Button/ButtonMail";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import { Form, Input } from "components/common/Forms";
import { signIn } from "next-auth/react";
import React, { FC, useState } from "react";

type Props = {};

const SignInForm: FC<Props> = ({}) => {
  const [isLoading, setIsloading] = useState(false);
  const onSubmit = async ({ email }: { email: Email }) => {
    setIsloading(true);
    try {
      await signIn("email", { email });
    } catch (error) {
      setIsloading(false);
    }
  };
  return (
    <Form onSubmit={onSubmit}>
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
        <ButtonMail label="Iniciar sesión" isFull isLoading={isLoading} />
        <div className="divider">O accede con</div>
        <ButtonGoogle isFull label="Google" />
      </CardBasicContent>
    </Form>
  );
};

export default SignInForm;
