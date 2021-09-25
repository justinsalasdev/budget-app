import { collection, query, onSnapshot } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { budgetConverter } from "../components/budgetConverter";
import { _Budget } from "../components/budgetSchema";
import { db } from "../firebase/firebase";
import generateKeys from "./generateKeys";

interface Props {
  children: ReactNode;
}

export interface State extends _Budget {
  id: string;
  keys: string[];
}

const initialState: State[] = [];

const getContext = createContext<State[]>(initialState);

export default function BudgetProvider(props: Props) {
  const [budget, setBudget] = useState<State[]>(initialState);

  useEffect(() => {
    const _ref = collection(db, "budget").withConverter(budgetConverter);
    const q = query(_ref);
    const unsub = onSnapshot(q, (querySnapshot) => {
      const _data: State[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;
        const keys = generateKeys(data.start, data.frequency);
        _data.push({ ...data, id, keys });
      });

      setBudget(_data);
    });
    return () => unsub();
  }, []);

  console.log(budget);

  return (
    <getContext.Provider value={budget}>{props.children}</getContext.Provider>
  );
}

export const useGetBudget = () => useContext(getContext);
