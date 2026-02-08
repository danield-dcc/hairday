import ListSchedules from "../core-components/list-schedules";
import CreateScheduling from "../core-components/create-scheduling";

export default function PageHome() {
  return (
    <div className="flex justify-center -mt-9">
      <CreateScheduling />

      <ListSchedules />
    </div>
  );
}
