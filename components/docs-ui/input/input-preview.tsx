import { Input } from "@/components/ui/input";
import Preview from "@/components/ui/preview";

export default function InputPreview() {
  return (
    <Preview>
      <Input type="email" placeholder="Email" />
    </Preview>
  );
}
