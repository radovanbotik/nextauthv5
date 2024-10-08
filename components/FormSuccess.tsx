export default function FormSuccess({ message }: { message: string | undefined }) {
  if (!message) return null;
  return <div className=" text-emerald-500">{message}</div>;
}
