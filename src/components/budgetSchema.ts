import { z } from "zod";

const zodFreq = z.enum(["weekly", "monthly", "annual"]);
const zodBudgetType = z.enum(["income", "expense"]);
export type Freq = z.infer<typeof zodFreq>;
export type BudgetType = z.infer<typeof zodBudgetType>;
export type _Budget = z.infer<typeof Budget>;
export const Budget = z.object({
  type: zodBudgetType,
  name: z.string().nonempty({ message: "name is required" }),
  // amount: z.string().nonempty({ message: "name is required" }),
  amount: z.preprocess(
    (val) => Number(val),
    z.number().positive({ message: "amount is invalid" })
  ),
  start: z.string(),
  color: z.string(),
  frequency: zodFreq,
});
