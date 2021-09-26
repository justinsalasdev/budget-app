import { useGetBudget } from "../../contexts/BudgetProvider";

export default function Budget() {
  const { budgets } = useGetBudget();
  return (
    <ul className="bg-white flex gap-2 p-2 max-w-2xl">
      {budgets.map(({ id, name, amount, start, frequency, color, type }) => (
        <li className={`p-2 rounded-sm shadow-md ${color}`} key={id}>
          <p>{name}</p>
          <p>{amount}</p>
          <p>{start}</p>
          <p>{frequency}</p>
          <p>{color}</p>
          <p>{type}</p>
        </li>
      ))}
    </ul>
  );
}
