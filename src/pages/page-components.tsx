import Button from "../components/button";
import Icon from "../components/icon";
import Text from "../components/text";
import CalendarIcon from "../assets/icons/calendar.svg?react";
import CaretDownIcon from "../assets/icons/caretDown.svg?react";
import CaretLeftIcon from "../assets/icons/caretLeft.svg?react";
import CaretRightIcon from "../assets/icons/caretRight.svg?react";
import CloudSunIcon from "../assets/icons/cloudSun.svg?react";
import MoonStarsIcon from "../assets/icons/moonStars.svg?react";
import SunHorizonIcon from "../assets/icons/sunHorizon.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import UserIcon from "../assets/icons/user.svg?react";
import ButtonIcon from "../components/button-icon";

export default function PageComponents() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Text variant="title-lg" className="text-yellow-light">
          Olá mundo!
        </Text>
        <Text variant="title-md" className="text-yellow-light">
          Olá mundo!
        </Text>
        <Text variant="title-sm" className="text-yellow-light">
          Olá mundo!
        </Text>
        <Text variant="body-md" className="text-yellow-light">
          Olá mundo!
        </Text>
        <Text variant="body-sm" className="text-yellow-light">
          Olá mundo!
        </Text>
      </div>
      <div className="flex flex-col gap-2">
        <Button>AGENDAR</Button>
        <Button disabled>AGENDAR</Button>
      </div>

      <div className="flex gap-1">
        <Icon svg={CalendarIcon} className="fill-gray-300" />
        <Icon svg={CaretDownIcon} />
        <Icon svg={CaretLeftIcon} />
        <Icon svg={CaretRightIcon} />
        <Icon svg={CloudSunIcon} />
        <Icon svg={MoonStarsIcon} />
        <Icon svg={SunHorizonIcon} />
        <Icon svg={TrashIcon} />
        <Icon svg={UserIcon} />
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} />
      </div>
    </div>
  );
}
