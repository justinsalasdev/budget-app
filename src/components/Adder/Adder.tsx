import { zodResolver } from "@hookform/resolvers/zod";
import { DateTime } from "luxon";
import { FormProvider, useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import { Budget } from "../../contexts/BudgetProvider";
import BudgetForm from "../BudgetForm/BudgetForm";
import { zodBudget, BudgetType } from "../budgetSchema";

type Param = {
  type: BudgetType;
};

const dt = DateTime.local();
export default function Adder(props: RouteComponentProps<Param, any, Budget>) {
  const params = props.match?.params || { type: "expense" };
  const {
    name = "",
    amount = "",
    id,
    type = params.type || "expense",
    frequency = "weekly",
    start = dt.toISODate(),
    color = "bg-gray-900",
  } = props.location.state || {};

  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(zodBudget),
    defaultValues: {
      name,
      amount,
      type,
      frequency,
      start,
      color,
    },
  });

  return (
    <FormProvider {...methods}>
      <BudgetForm id={id} />
    </FormProvider>
  );
}
