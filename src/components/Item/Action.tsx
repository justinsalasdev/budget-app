import { IconType } from "react-icons/lib";

type Props = { icon: IconType; type: "delete" | "edit" };
export default function Action(props: Props) {
  const Icon = props.icon;
  const accent =
    props.type === "edit"
      ? "border-purple-300 text-purple-300"
      : "border-red-300 text-red-300";
  return (
    <button className={`p-2 border border-2 ${accent} rounded-full`}>
      <Icon />
    </button>
  );
}
