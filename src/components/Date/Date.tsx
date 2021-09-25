import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  id: string;
  placeHolder: string;
}

export default function Date({ id, placeHolder }: Props) {
  const { register } = useFormContext();
  const [custom, setCustom] = useState(false);
  function showCustom() {
    setCustom(true);
  }
  function hideCustom() {
    setCustom(false);
  }
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <button
          className="bg-blue-400 py-1 w-24"
          type="button"
          onClick={hideCustom}
        >
          {placeHolder}
        </button>
        <button
          className="bg-blue-400 py-1 w-24"
          type="button"
          onClick={showCustom}
        >
          custom
        </button>
      </div>

      {custom && (
        <input
          id={id}
          className="rounded-sm px-2 py-1"
          type="date"
          {...register(id)}
        />
      )}
    </div>
  );
}
