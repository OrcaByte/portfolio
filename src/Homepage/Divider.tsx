export default function Divider(props?: {
  classes?: { root?: string; border?: string };
}) {
  return (
    <div className={`${props?.classes?.root}  flex my-4 w-full justify-center`}>
      <div style={{ width: '95%' }} className={`${props?.classes?.border} border-t border-gray-400`} />
    </div>
  );
}
