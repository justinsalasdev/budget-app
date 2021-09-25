import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import Color from "../Color/Color";
import colors from "./colors";

export default function Colors() {
  const { watch } = useFormContext();
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
          className={`w-8 h-8 ${color} rounded-full shadow-lg`}
        ></label>
        <button type="button" id="color-setter" onClick={openPallete}>
          set color
        </button>
      </div>{" "}
      {expanded && (
        <div className="grid place-items-center">
          <ul className="grid grid-cols-7 grid-rows-8 gap-2 place-items-center bg-white p-2">
            {colors.map((color) => {
              return <Color key={color} color={color} />;
            })}
          </ul>
        </div>
      )}
    </>
  );
}
