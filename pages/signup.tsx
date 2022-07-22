import { NextPage } from "next";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import AuthLayout from "components/layout/AuthLayout";
import SignUpForm from "components/pages/signup/SignUpForm";

const SignUp: NextPage = () => {
  return (
    <AuthLayout>
      <CardBasic>
        <CardBasicTitle title="Crea una cuenta" />
        <SignUpForm />
      </CardBasic>
    </AuthLayout>
  );
};

export default SignUp;
