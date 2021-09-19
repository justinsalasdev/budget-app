import { z } from "zod";

export const Budget = z.object({
  name: z.string().nonempty({ message: "name is required" }),
  // amount: z.string().nonempty({ message: "name is required" }),
  amount: z.preprocess(val => Number(val), z.number().positive({message:''})),
  start: z.string(),
  end: z.string(),
});
