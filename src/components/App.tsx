import { FieldValues, useForm } from "react-hook-form";
import Calendar from "./Calendar/Calendar";
import { DateTime } from "luxon";
import { yupResolver } from "@hookform/resolvers/yup";
import { budgetSchema } from "./budgetSchema";

interface Values {
  amount: number;
  name: string;
  start?: string;
  end?: string;
}

const dt = DateTime.local();

export default function App() {
  const { register, handleSubmit, formState } = useForm<Values>({
    mode: "onChange",
    resolver: yupResolver(budgetSchema),
    defaultValues: {
      amount: 0,
      name: "",
      start: dt.toISODate(),
      end: dt.toISODate(),
    },
  });
  function submitHandler(data: Values) {
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
