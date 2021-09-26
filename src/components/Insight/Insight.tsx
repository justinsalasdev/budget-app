import { useEffect } from "react";
import { useGetTimeline } from "../../contexts/TimeLineProvider";

export default function Insight() {
  const { timeline, flag } = useGetTimeline();

  useEffect(() => {
    console.log("compute insights", timeline);
  }, [flag]);
  return <div className="h-24 bg-pink-400 w-50">insight</div>;
}
