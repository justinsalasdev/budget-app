import { FormProvider, useForm } from "react-hook-form";
import Calendar from "./Calendar/Calendar";
import { DateTime } from "luxon";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Budget as _Budget, Freq } from "./budgetSchema";
import Option from "./Option/Option";

type Budget = z.infer<typeof _Budget>;
const dt = DateTime.local();

export default function App() {
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(_Budget),
    defaultValues: {
      frequency: "weekly",
      start: dt.toISODate(),
      end: dt.toISODate(),
    },
  });
  const { watch, register, handleSubmit, formState } = methods;
  const freq = watch("frequency");
  function submitHandler(data: Budget) {
    console.log(data, formState);
  }

  console.log(formState.errors);

  return (
    <div>
      <Calendar />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="rounded-sm bg-green-400 grid max-w-lg p-6 gap-2"
        >
          <input
            className="rounded-sm px-2 py-1"
            {...register("name")}
            placeholder="Name"
          />
          <input
            className="rounded-sm px-2 py-1"
            {...register("amount")}
            placeholder="Amount"
          />

          <div className="flex gap-2">
            <Option id="option1" value="weekly" name="frequency" />
            <Option id="option2" value="monthly" name="frequency" />
            <Option id="option3" value="annual" name="frequency" />
          </div>

          <label htmlFor="start">Start</label>
          <input
            id="start"
            className="rounded-sm px-2 py-1"
            type="date"
            {...register("start")}
            placeholder="Start"
          />
          <label htmlFor="end">End</label>
          <input
            className="rounded-sm px-2 py-1"
            type="date"
            {...register("end")}
            placeholder="End"
          />

          <button
            className="bg-yellow-400 py-1 uppercase text-gray-100"
            type="submit"
          >
            Save
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
