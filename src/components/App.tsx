import { useForm } from "react-hook-form";
import Calendar from "./Calendar/Calendar";

import { zodResolver } from "@hookform/resolvers/zod";
import { Budget as _Budget } from "./budgetSchema";
import { z } from "zod";

type Budget = z.infer<typeof _Budget>;


const currDate = new Date();
const year = currDate.getFullYear()
const month = currDate.getMonth()
const dayNum = currDate.getDate()

export default function App() {
  const { register, handleSubmit, formState } = useFormas({
    mode: "onChange",
    resolver: zodResolver(_Budget),
    defaultValue:{
      name: '',
      amount:0,
      start: `${year}-${month}-${dayNum}`,
      end: `${year}-${month}-${dayNum}`
    }
  });
  function submitHandler(data: Budget) {
    console.log(data, formState);
  }


  return (
    <div>
      <Calendar />
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col items-center bg-green-400"
      >
        <input {...register("name")} placeholder="Name" />
        <input {...register("amount")} placeholder="Amount" />
        <input type="date" {...register("start")} placeholder="Start" />
        <input type="date" {...register("end")} placeholder="End" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
