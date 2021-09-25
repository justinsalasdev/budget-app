import { z } from "zod";

const zodFreq = z.enum(["weekly", "monthly", "annual"]);
export type Freq = z.infer<typeof zodFreq>;
export type _Budget = z.infer<typeof Budget>;
export const Budget = z.object({
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
