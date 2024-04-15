import Preview from "@/components/ui/preview";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarPreview() {
  return (
    <Preview>
      <Calendar
        mode="single"
        selected={new Date()}
        onSelect={(date) => console.log(date)}
        className="rounded-md shadow"
      />
    </Preview>
  );
}
