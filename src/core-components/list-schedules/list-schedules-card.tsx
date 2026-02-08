import { type ReactNode } from "react";
import Icon from "../../components/icon";
import Text from "../../components/text";

interface ListSchedulesCardProps {
  children: ReactNode;
  iconSvg: React.FC<React.SVGProps<SVGSVGElement>>;
  timeOfDay: "Manhã" | "Tarde" | "Noite";
  periodOfTime: "09h-12h" | "13h-18h" | "19h-21h";
}

export default function ListSchedulesCard({
  periodOfTime,
  timeOfDay,
  iconSvg,
  children,
  ...props
}: ListSchedulesCardProps) {
  return (
    <div className="border rounded border-gray-600 w-full " {...props}>
      <div className="flex px-5 py-3 border-b border-b-gray-600">
        <Icon svg={iconSvg} className="fill-yellow-dark w-5 h-5 mr-3" />

        <Text variant="body-sm" className="text-gray-300">
          {timeOfDay}
        </Text>
        <Text variant="body-sm" className="text-gray-400 ml-auto">
          {periodOfTime}
        </Text>
      </div>
      <div className="flex flex-col p-5  gap-3">{children}</div>
    </div>
  );
}
