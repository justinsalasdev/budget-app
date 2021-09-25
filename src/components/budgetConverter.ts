import { FirestoreDataConverter } from "@firebase/firestore";
import { _Budget } from "./budgetSchema";

export const budgetConverter: FirestoreDataConverter<_Budget> = {
  toFirestore(modelObj) {
    //modelObj is of type _Budget
    return modelObj;
  },
  fromFirestore: (snapshot, options) => {
    //extract data with any type
    const { name, amount, start, frequency, color } = snapshot.data(options);
    //cast with _Budget type
    return { name, amount, start, frequency, color };
  },
};
