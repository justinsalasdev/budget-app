import Color from "../Color/Color";
import colors from "./colors";

export default function Colors() {
  return (
    <div className="grid place-items-center">
      <ul className="grid grid-cols-7 grid-rows-8 gap-2 place-items-center bg-white p-2">
        {colors.map((color) => {
          return <Color color={color} />;
        })}
      </ul>
    </div>
  );
}
