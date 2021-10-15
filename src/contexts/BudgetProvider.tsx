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

interface DaySums {
  sumExpenses: number;
  sumIncome: number;
}

interface Timeline {
  [index: string]: DaySums;
}

export interface Budget extends _Budget {
  id: string;
  keys: string[];
}

interface GetValue {
  budgets: Budget[];
  timeline: Timeline;
}

const initialState = {
  budgets: [],
  timeline: {},
};

const getContext = createContext<GetValue>(initialState);

export default function BudgetProvider(props: Props) {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [timeline, setTimeline] = useState<Timeline>({});

  useEffect(() => {
    const _ref = collection(db, "budget").withConverter(budgetConverter);
    const q = query(_ref);
    const unsub = onSnapshot(q, (querySnapshot) => {
      const _data: Budget[] = [];
      //reset current timeline
      const _timeline: Timeline = {};

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;

        //generate keys for calendar view
        const keys = generateKeys(data.start, data.frequency);
        _data.push({ ...data, id, keys });
        //build timeline for analytics
        const income = data.type === "income" ? data.amount : 0;
        const expense = data.type === "expense" ? data.amount : 0;
        keys.forEach((key) => {
          const daySum = _timeline[key];
          if (!daySum) {
            _timeline[key] = { sumExpenses: expense, sumIncome: income };
          } else {
            _timeline[key].sumExpenses += expense;
            _timeline[key].sumIncome += income;
          }
        });
        //update timeline
      });

      setBudgets(_data);
      setTimeline(_timeline);
    });
    return () => unsub();
  }, []);

  return (
    <getContext.Provider value={{ budgets, timeline }}>
      {props.children}
    </getContext.Provider>
  );
}

export const useGetBudget = () => useContext(getContext);
