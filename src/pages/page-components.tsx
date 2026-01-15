import Button from "../components/button";
import Text from "../components/text";

export default function PageComponents() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Text variant="title-lg" className="text-yellow-light">
          Olá mundo!
        </Text>
      </div>
      <div className="flex flex-col gap-2">
        <Button>AGENDAR</Button>
        <Button disabled>AGENDAR</Button>
      </div>
    </div>
  );
}
