import Container from "../components/container";
import Text from "../components/text";
import ListSchedules from "../core-components/list-schedules";
import DataIcon from "../assets/icons/calendar.svg?react";
import InputText from "../components/inputText";
import TimeSelect from "../components/timeSelect";
import UserIcon from "../assets/icons/user.svg?react";
import Button from "../components/button";

export default function PageHome() {
  return (
    <div className="flex justify-center -mt-9">
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

        <div className="flex flex-col mt-6">
          <Text variant="title-md" className="text-gray-200">
            Data
          </Text>
          <InputText type="date" icon={DataIcon} placeholder="10/01/2024" />
        </div>

        <div className="flex flex-col mt-8">
          <Text variant="title-md" className="text-gray-200">
            Horários
          </Text>
          <Text variant="body-sm" className="text-gray-300 mt-2 mb-3">
            Manhã
          </Text>
          <div className="flex gap-2 flex-wrap">
            <TimeSelect>09:00</TimeSelect>
            <TimeSelect>10:00</TimeSelect>
            <TimeSelect disabled>11:00</TimeSelect>
            <TimeSelect>12:00</TimeSelect>
          </div>
          <Text variant="body-sm" className="text-gray-300 mt-2 mb-3">
            Tarde
          </Text>
          <div className="flex gap-2 flex-wrap">
            <TimeSelect disabled>13:00</TimeSelect>
            <TimeSelect disabled>14:00</TimeSelect>
            <TimeSelect>15:00</TimeSelect>
            <TimeSelect disabled>16:00</TimeSelect>
            <TimeSelect disabled>17:00</TimeSelect>
            <TimeSelect>18:00</TimeSelect>
          </div>
          <Text variant="body-sm" className="text-gray-300 mt-2 mb-3">
            Noite
          </Text>
          <div className="flex gap-2 flex-wrap">
            <TimeSelect>19:00</TimeSelect>
            <TimeSelect variant="select">20:00</TimeSelect>
            <TimeSelect>21:00</TimeSelect>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <Text variant="title-md" className="text-gray-300 mt-2 mb-3">
            Cliente
          </Text>
          <div className="flex gap-1">
            <InputText icon={UserIcon} placeholder="Nome do cliente" />
          </div>
        </div>

        <Button type="submit" className="mt-6">
          AGENDAR
        </Button>
      </Container>

      <ListSchedules />
    </div>
  );
}
