import useLocalStorage from "use-local-storage";
import { SCHEDULE_KEY, type Schedule } from "../models/schedule";
import { useEffect, useState } from "react";

export default function useSchedules() {
  const [scheduleData, setScheduleData] = useLocalStorage<Schedule[]>(
    SCHEDULE_KEY,
    [],
  );

  const [schedules, setSchedules] = useState<Schedule[]>([]);

  function fetchSchedules() {
    setSchedules(scheduleData);
  }

  useEffect(() => {
    fetchSchedules();
  }, [scheduleData]);

  return {
    schedules,
  };
}
