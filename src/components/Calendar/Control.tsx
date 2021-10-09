import { IconType } from "react-icons";

type Props = { handler: () => void; icon: IconType };

export default function Control(props: Props) {
  const Icon = props.icon;
  return (
    <button
      onClick={props.handler}
      className="bg-purple-400 py-1 px-3 rounded-sm"
    >
      <Icon />
    </button>
  );
}
