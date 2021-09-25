import { FormProvider, useForm } from "react-hook-form";
import Calendar from "./Calendar/Calendar";
import { DateTime } from "luxon";
import { z } from "zod";
import { Budget as _Budget } from "./budgetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import BudgetForm from "./BudgetForm/BudgetForm";

const dt = DateTime.local();
export default function App() {
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(_Budget),
    defaultValues: {
      frequency: "weekly",
      start: dt.toISODate(),
    },
  });

  return (
    <div>
      <Calendar />
      <FormProvider {...methods}>
        <BudgetForm />
      </FormProvider>
    </div>
  );
}
