import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { _Budget } from "../budgetSchema";
import Color from "../Color/Color";
import colors from "./colors";

export default function Colors() {
  const { watch } = useFormContext<_Budget>();
  const color = watch("color");
  const colorRef = useRef<string>(color);
  const [expanded, expand] = useState(false);

  function openPallete() {
    expand((p) => !p);
  }

  useEffect(() => {
    if (color !== colorRef.current) {
      expand(false);
    }
  }, [color]);

  return (
    <>
      <div className="flex gap-2 items-center">
        <label
          htmlFor="color-setter"
          className={`w-4 h-4 ${color} rounded-full shadow-lg`}
        ></label>
        <button type="button" id="color-setter" onClick={openPallete}>
          set color
        </button>
      </div>{" "}
      {expanded && (
        <ul className="flex flex-wrap gap-2 justify-center">
          {colors.map((color) => {
            return <Color key={color} color={color} />;
          })}
        </ul>
      )}
    </>
  );
}
