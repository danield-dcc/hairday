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

const morningSchedules = [
  { value: "09:00", label: "09:00" },
  { value: "10:00", label: "10:00" },
  { value: "11:00", label: "11:00" },
  { value: "12:00", label: "12:00" },
];

const eveningSchedules = [
  { value: "13:00", label: "13:00" },
  { value: "14:00", label: "14:00" },
  { value: "15:00", label: "15:00" },
  { value: "16:00", label: "16:00" },
  { value: "17:00", label: "17:00" },
  { value: "18:00", label: "18:00" },
];

const nightSchedules = [
  { value: "19:00", label: "19:00" },
  { value: "20:00", label: "20:00" },
  { value: "21:00", label: "21:00" },
];

export default function CreateScheduling() {
  const form = useForm<ScheduleFormSchema>({
    resolver: zodResolver(scheduleFormSchema),
  });

  function handleFormSubmit(payload: any) {
    console.log(payload);
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
