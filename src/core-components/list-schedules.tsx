import Container from "../components/container";
import InputText from "../components/inputText";
import Text from "../components/text";
import DataIcon from "../assets/icons/calendar.svg?react";
import CloudSunIcon from "../assets/icons/cloudSun.svg?react";
import SunHorizonIcon from "../assets/icons/sunHorizon.svg?react";
import ListSchedulesItems from "./list-schedules/list-schedules-items";
import ListSchedulesCard from "./list-schedules/list-schedules-card";
import useSchedules from "../hooks/use-schedules";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ListSchedules() {
  const form = useForm();
  const selectedDate = form.watch("scheduleDate");

  const { schedules } = useSchedules();

  useEffect(() => {
    console.log(schedules);
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
          <ListSchedulesItems
            clienteName={"Ryan Dorwart"}
            scheduleTime={"11:00"}
          />
        </ListSchedulesCard>

        {/* tarde */}
        <ListSchedulesCard
          iconSvg={CloudSunIcon}
          periodOfTime="13h-18h"
          timeOfDay="Tarde"
        >
          <ListSchedulesItems
            clienteName={"Livia Curtis"}
            scheduleTime={" 13:00"}
          />
          <ListSchedulesItems
            clienteName={"Randy Calzoni"}
            scheduleTime={" 14:00"}
          />
          <ListSchedulesItems
            clienteName={"Marley Franci"}
            scheduleTime={" 15:00"}
          />
          <ListSchedulesItems
            clienteName={"Jaylon Korsgaard"}
            scheduleTime={" 16:00"}
          />
        </ListSchedulesCard>

        {/* noite */}
        <ListSchedulesCard
          iconSvg={SunHorizonIcon}
          periodOfTime="19h-21h"
          timeOfDay="Noite"
        >
          <ListSchedulesItems
            clienteName={"Maria Herwitz"}
            scheduleTime={"21:00"}
          />
        </ListSchedulesCard>
      </div>
    </Container>
  );
}
