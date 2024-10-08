export default function FormError({ message }: { message: string | undefined }) {
  if (!message) return null;
  return <div className=" text-destructive">{message}</div>;
}
