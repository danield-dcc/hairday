import useLocalStorage from "use-local-storage";
import { SCHEDULE_KEY, type Schedule } from "../models/schedule";

export function useSchedule() {
  const [schedules, setSchedules] = useLocalStorage<Schedule[]>(
    SCHEDULE_KEY,
    [],
  );

  function saveSchedule(payload: Schedule) {
    const { date, timeOfDay, client } = payload;

    const unavailable = schedules.find(
      (schedule) => schedule.date === date && schedule.timeOfDay === timeOfDay,
    );

    if (!unavailable) {
      setSchedules([
        ...schedules,
        {
          date,
          id: Math.random().toString(36).substring(2, 9),
          client,
          timeOfDay,
        },
      ]);
    }
  }

  function deleteSchedule(id: string) {
    setSchedules(schedules.filter((schedule) => schedule.id !== id));
  }

  return {
    saveSchedule,
    deleteSchedule,
  };
}
