import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type AmbulationData = {
    ambulation: string;
}

type AmbulationProps = AmbulationData & {
    updateFields: (fields: Partial<AmbulationData>) => void;
}

export function Ambulation({ ambulation, updateFields }: AmbulationProps) {
    const [value, setValue] = useState(ambulation);

    useEffect(() => {
        updateFields({ ambulation: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="ambulation">Ambulation Status</Label>
            <Select value={ambulation} onValueChange={setValue}>
                <SelectTrigger id="ambulation" autoFocus>
                    <SelectValue placeholder="Select ambulation status" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="Bedbound">
                        Bedbound
                    </SelectItem>
                    <SelectItem value="Walking unaided, aided">
                        Walking unaided, aided
                    </SelectItem>
                    <SelectItem value="Wheelchair">
                        Wheelchair
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
