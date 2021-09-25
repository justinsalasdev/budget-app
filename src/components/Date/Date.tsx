import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function Date() {
  const { register } = useFormContext();
  const [custom, setCustom] = useState(false);
  function showCustom() {
    setCustom(true);
  }
  function hideCustom() {
    setCustom(false);
  }
  return (
    <>
      <div className="flex items-center gap-2">
        <p className="uppercase">Starts</p>
        <button
          className="bg-blue-400 py-1 w-24"
          type="button"
          onClick={hideCustom}
        >
          now
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
          className="rounded-sm px-2 py-1"
          type="date"
          {...register("start")}
        />
      )}
    </>
  );
}
