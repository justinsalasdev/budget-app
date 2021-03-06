import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";
import { Budget } from "../../contexts/BudgetProvider";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useState } from "react";

type Props = {
  type: "edit" | "delete";
  icon: IconType;
  data: Budget;
};
export default function Action(props: Props) {
  const [loading, setLoading] = useState(false);
  const Icon = props.icon;
  const accent =
    props.type === "edit"
      ? "text-blue-300 hover:text-blue-400"
      : "text-red-300 hover:text-red-400";

  async function handleDelete() {
    const docRef = doc(db, "budget", props.data.id);
    try {
      setLoading(true);
      await deleteDoc(docRef);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  if (props.type === "delete") {
    return (
      <button
        onClick={handleDelete}
        disabled={loading}
        className={`${accent} justify-self-end`}
      >
        <Icon />
      </button>
    );
  } else {
    return (
      <Link
        to={{ pathname: "/edit", state: props.data }}
        className={`${accent} justify-self-end`}
      >
        <Icon />
      </Link>
    );
  }
}
