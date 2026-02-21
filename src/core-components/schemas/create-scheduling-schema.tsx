import z from "zod";

const availableTime = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

export const scheduleFormSchema = z.object({
  date: z.string().min(1, { message: "Selecione uma data válida" }),
  client: z.string().min(3, { message: "Nome deve ter mais de 3 letras" }),
  timeOfDay: z.enum(availableTime, { message: "Selecione um horário" }),
});

export type ScheduleFormSchema = z.infer<typeof scheduleFormSchema>;
