import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type HandgripData = {
    handgrip: string;
}

type HandgripProps = HandgripData & {
    updateFields: (fields: Partial<HandgripData>) => void;
}

export function Handgrip({ handgrip, updateFields }: HandgripProps) {
    const [value, setValue] = useState(handgrip);

    useEffect(() => {
        updateFields({ handgrip: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="handgrip">Handgrip Strength</Label>
            <Select value={handgrip} onValueChange={setValue}>
                <SelectTrigger id="handgrip" autoFocus>
                    <SelectValue placeholder="Select handgrip strength" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="High">
                        High
                    </SelectItem>
                    <SelectItem value="Low">
                        Low
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
