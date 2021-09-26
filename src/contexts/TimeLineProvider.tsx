import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface DaySummary {
  sumExpenses: number;
  sumIncome: number;
}

interface Timeline {
  [index: string]: DaySummary;
}

type Updater = (key: string, daySummary: DaySummary) => void;

interface Setters {
  updateTimeline: Updater;
  resetTimeline: () => void;
  broadcastUpdate: () => void;
}

interface GetValue {
  flag: number;
  timeline: Timeline;
}

const getContext = createContext<GetValue>({
  timeline: {},
  flag: 0,
});

const setContext = createContext<Setters>({
  updateTimeline: () => {},
  resetTimeline: () => {},
  broadcastUpdate: () => {},
});

export default function TimelineProvider(props: Props) {
  console.log("timeline renders");
  const [flag, setFlag] = useState(0);
  const timelineRef = useRef<Timeline>({});

  function broadcastUpdate() {
    setFlag((flag) => flag + 1);
  }

  function resetTimeline() {
    timelineRef.current = {};
  }

  function updateTimeline(key: string, daySummary: DaySummary) {
    timelineRef.current[key] = daySummary;
  }

  useEffect(() => {
    //reset timeline before app unmounts
    return () => resetTimeline();
  }, []);

  return (
    <setContext.Provider
      value={{ updateTimeline, resetTimeline, broadcastUpdate }}
    >
      <getContext.Provider value={{ timeline: timelineRef.current, flag }}>
        {props.children}
      </getContext.Provider>
    </setContext.Provider>
  );
}

export const useSetTimeline = () => useContext(setContext);
export const useGetTimeline = () => useContext(getContext);
