import { any, z } from "zod";

const zodFreq = z.enum(["weekly", "monthly", "annual"]);
export type Freq = z.infer<typeof zodFreq>;
export const Budget = z.object({
  name: z.string().nonempty({ message: "name is required" }),
  // amount: z.string().nonempty({ message: "name is required" }),
  amount: z.preprocess(
    (val) => Number(val),
    z.number().positive({ message: "amount can't be negative" })
  ),
  start: z.string().nullable(),
  end: z.string().nullable(),
  frequency: zodFreq,
});
