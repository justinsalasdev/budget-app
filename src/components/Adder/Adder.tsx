import { zodResolver } from "@hookform/resolvers/zod";
import { DateTime } from "luxon";
import { FormProvider, useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import BudgetForm from "../BudgetForm/BudgetForm";
import { Budget as _Budget, BudgetType } from "../budgetSchema";

type Param = {
  type: BudgetType;
};

const dt = DateTime.local();
export default function Adder(props: RouteComponentProps<Param>) {
  const params = props.match?.params || { type: "expense" };
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(_Budget),
    defaultValues: {
      type: params.type,
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
