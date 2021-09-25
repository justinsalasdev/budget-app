import { FormProvider, useForm } from "react-hook-form";
import Calendar from "./Calendar/Calendar";
import { DateTime } from "luxon";
import { Budget as _Budget } from "./budgetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import BudgetForm from "./BudgetForm/BudgetForm";
import Budget from "./Budget/Budget";

const dt = DateTime.local();
export default function App() {
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(_Budget),
    defaultValues: {
      frequency: "weekly",
      start: dt.toISODate(),
      color: "bg-gray-900",
    },
  });

  return (
    <div>
      <Calendar />
      <FormProvider {...methods}>
        <BudgetForm />
      </FormProvider>
      <Budget />
    </div>
  );
}
