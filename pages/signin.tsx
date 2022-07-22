import { NextPage } from "next";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import AuthLayout from "components/layout/AuthLayout";
import SignInForm from "components/pages/signin/SignInForm";

const SignIn: NextPage = () => {
  return (
    <AuthLayout>
      <CardBasic>
        <CardBasicTitle title="Inicia sesión" />
        <SignInForm />
      </CardBasic>
    </AuthLayout>
  );
};

export default SignIn;
