import { zodResolver } from "@hookform/resolvers/zod";
import { DateTime } from "luxon";
import { FormProvider, useForm } from "react-hook-form";
import BudgetForm from "../BudgetForm/BudgetForm";
import { Budget as _Budget } from "../budgetSchema";

const dt = DateTime.local();
export default function Adder() {
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(_Budget),
    defaultValues: {
      type: "expense",
      frequency: "weekly",
      start: dt.toISODate(),
      color: "bg-gray-900",
    },
  });

  return (
    <FormProvider {...methods}>
      <BudgetForm />
    </FormProvider>
  );
}
