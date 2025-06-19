"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const RecurringOptions = () => (
  <div className="space-y-2">
    <Label className="text-sm font-medium">Frequency</Label>
    <RadioGroup defaultValue="daily" className="flex gap-4">
      {["daily", "weekly", "monthly"].map((freq) => (
        <div key={freq} className="flex items-center space-x-2">
          <RadioGroupItem value={freq} id={freq} />
          <Label htmlFor={freq} className="capitalize">{freq}</Label>
        </div>
      ))}
    </RadioGroup>
  </div>
);

export default RecurringOptions;
