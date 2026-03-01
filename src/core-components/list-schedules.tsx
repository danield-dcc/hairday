import { useEffect, useState } from "react";
import Container from "../components/container";
import InputText from "../components/inputText";
import Text from "../components/text";
import DataIcon from "../assets/icons/calendar.svg?react";
import CloudSunIcon from "../assets/icons/cloudSun.svg?react";
import SunHorizonIcon from "../assets/icons/sunHorizon.svg?react";
import ListSchedulesItems from "./list-schedules/list-schedules-items";
import ListSchedulesCard from "./list-schedules/list-schedules-card";
import useSchedules from "../hooks/use-schedules";
import { useForm } from "react-hook-form";
import type { Schedule } from "../models/schedule";
import { useSchedule } from "../hooks/use-schedule";

const morningSchedules = ["09:00", "10:00", "11:00", "12:00"];
const eveningSchedules = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const nightSchedules = ["19:00", "20:00", "21:00"];

export default function ListSchedules() {
  const [scheduleDate, setScheduleDate] = useState<Schedule[]>([]);
  const [morningSchedule, setMorningSchedule] = useState<Schedule[]>([]);
  const [eveningSchedule, setEveningSchedule] = useState<Schedule[]>([]);
  const [nightSchedule, setNightSchedule] = useState<Schedule[]>([]);

  const form = useForm();
  const selectedDate = form.watch("scheduleDate");

  const { schedules } = useSchedules();
  const { deleteSchedule } = useSchedule();

  function getPeriodOfSchedule() {
    const date = schedules.filter((schedule) => schedule.date === selectedDate);
    if (date) {
      setScheduleDate(date);
    }

    if (scheduleDate) {
      setMorningSchedule(periodOfDayFilter(date, morningSchedules));
      setEveningSchedule(periodOfDayFilter(date, eveningSchedules));
      setNightSchedule(periodOfDayFilter(date, nightSchedules));
    }
  }

  function periodOfDayFilter(date: Schedule[], time: string[]) {
    return date
      .filter((schedule) => time.includes(schedule.timeOfDay))
      .sort((a, b) => a.timeOfDay.localeCompare(b.timeOfDay));
  }

  useEffect(() => {
    getPeriodOfSchedule();
  }, [schedules, selectedDate]);

  return (
    <Container className="bg-gray-900 rounded-xl w-226.5 py-20 px-28 ">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <Text variant="title-lg" className="text-gray-100">
            Sua agenda
          </Text>
          <Text variant="body-sm" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>

        <form>
          <InputText
            type="date"
            icon={DataIcon}
            placeholder="10/01/2024"
            {...form.register("scheduleDate")}
          />
        </form>
      </div>

      <div className="flex flex-col mt-8 gap-3">
        {/* manha */}
        <ListSchedulesCard
          iconSvg={SunHorizonIcon}
          periodOfTime="09h-12h"
          timeOfDay="Manhã"
        >
          {morningSchedule &&
            morningSchedule.map((schedules) => (
              <ListSchedulesItems
                key={schedules.id}
                clienteName={schedules.client}
                scheduleTime={schedules.timeOfDay}
                deleteSchedule={() => deleteSchedule(schedules.id)}
              />
            ))}
        </ListSchedulesCard>

        {/* tarde */}
        <ListSchedulesCard
          iconSvg={CloudSunIcon}
          periodOfTime="13h-18h"
          timeOfDay="Tarde"
        >
          {eveningSchedule &&
            eveningSchedule.map((schedules) => (
              <ListSchedulesItems
                key={schedules.id}
                clienteName={schedules.client}
                scheduleTime={schedules.timeOfDay}
                deleteSchedule={() => deleteSchedule(schedules.id)}
              />
            ))}
        </ListSchedulesCard>

        {/* noite */}
        <ListSchedulesCard
          iconSvg={SunHorizonIcon}
          periodOfTime="19h-21h"
          timeOfDay="Noite"
        >
          {nightSchedule &&
            nightSchedule.map((schedules) => (
              <ListSchedulesItems
                key={schedules.id}
                clienteName={schedules.client}
                scheduleTime={schedules.timeOfDay}
                deleteSchedule={() => deleteSchedule(schedules.id)}
              />
            ))}
        </ListSchedulesCard>
      </div>
    </Container>
  );
}
