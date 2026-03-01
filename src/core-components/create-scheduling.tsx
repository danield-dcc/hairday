import { useMemo } from "react";
import Button from "../components/button";
import Container from "../components/container";
import InputText from "../components/inputText";
import Text from "../components/text";
import TimeSelect from "../components/timeSelect";
import UserIcon from "../assets/icons/user.svg?react";
import DataIcon from "../assets/icons/calendar.svg?react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  scheduleFormSchema,
  type ScheduleFormSchema,
} from "./schemas/create-scheduling-schema";
import { useSchedule } from "../hooks/use-schedule";
import useSchedules from "../hooks/use-schedules";

export default function CreateScheduling() {
  const form = useForm<ScheduleFormSchema>({
    resolver: zodResolver(scheduleFormSchema),
  });
  const selectedInputDate = form.watch("date");

  const { saveSchedule } = useSchedule();
  const { schedules } = useSchedules();

  const occupiedTimes = useMemo(
    () =>
      schedules
        .filter((schedule) => schedule.date === selectedInputDate)
        .map((schedule) => schedule.timeOfDay),
    [schedules, selectedInputDate],
  );

  function toOptions(times: string[]) {
    return times.map((time) => ({
      value: time,
      label: time,
      disabled: occupiedTimes.includes(time),
    }));
  }

  const morningSchedules = toOptions(["09:00", "10:00", "11:00", "12:00"]);
  const eveningSchedules = toOptions([
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ]);
  const nightSchedules = toOptions(["19:00", "20:00", "21:00"]);

  function handleFormSubmit(payload: any) {
    saveSchedule(payload);
    form.reset();
  }

  return (
    <Container className="bg-gray-700 rounded-xl w-124.5 p-20">
      <div className="flex flex-col gap-2">
        <Text variant="title-lg" className="text-gray-100 ">
          Agende um atendimento
        </Text>
        <Text variant="body-md" className="text-gray-300 ">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento.
        </Text>
      </div>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
          <div className="flex flex-col mt-6">
            <Text variant="title-md" className="text-gray-200">
              Data
            </Text>
            <InputText
              type="date"
              icon={DataIcon}
              placeholder="10/01/2024"
              {...form.register("date")}
            />
          </div>

          <div className="flex flex-col mt-8">
            <Text variant="title-md" className="text-gray-200">
              Horários
            </Text>

            <Text variant="body-sm" className="text-gray-300 mt-2 mb-3">
              Manhã
            </Text>

            <TimeSelect name="timeOfDay" options={morningSchedules} />

            <Text variant="body-sm" className="text-gray-300 mt-2 mb-3">
              Tarde
            </Text>

            <TimeSelect name="timeOfDay" options={eveningSchedules} />

            <Text variant="body-sm" className="text-gray-300 mt-2 mb-3">
              Noite
            </Text>

            <TimeSelect name="timeOfDay" options={nightSchedules} />
          </div>

          <div className="flex flex-col mt-8 ">
            <Text variant="title-md" className="text-gray-300 mt-2 mb-3">
              Cliente
            </Text>

            <InputText
              icon={UserIcon}
              placeholder="Nome do cliente "
              className="w-full"
              {...form.register("client")}
              error={form.formState.errors.client?.message}
            />
          </div>

          <Button type="submit" className="mt-6">
            AGENDAR
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
}
