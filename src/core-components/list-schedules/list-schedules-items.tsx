import ButtonIcon from "../../components/button-icon";
import Text from "../../components/text";
import TrashIcon from "../../assets/icons/trash.svg?react";

interface ListSchedulesItemsProps {
  scheduleTime: string;
  clienteName: string;
  deleteSchedule?: () => void;
}

export default function ListSchedulesItems({
  clienteName,
  scheduleTime,
  deleteSchedule,
}: ListSchedulesItemsProps) {
  return (
    <div className="flex">
      <Text variant="title-md" className="text-gray-200 mr-3">
        {scheduleTime}
      </Text>
      <Text variant="body-md" className="text-gray-200">
        {clienteName}
      </Text>
      <ButtonIcon
        onClick={deleteSchedule}
        icon={TrashIcon}
        className="ml-auto w-4 h-4"
      />
    </div>
  );
}
