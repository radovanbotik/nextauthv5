import CardWrapper from "./CardWrapper";

export default function LoginForm() {
  return (
    <CardWrapper
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      headerLabel="Welcome back"
      showSocial
    >
      <div>login form</div>
    </CardWrapper>
  );
}
