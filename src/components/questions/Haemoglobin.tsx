import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type HaemoglobinData = {
    hemoglobin: string;
}

type HaemoglobinProps = HaemoglobinData & {
    updateFields: (fields: Partial<HaemoglobinData>) => void;
}

export function Haemoglobin({ hemoglobin, updateFields }: HaemoglobinProps) {
    const [value, setValue] = useState(hemoglobin);

    useEffect(() => {
        updateFields({ hemoglobin: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="hemoglobin">Haemoglobin Level</Label>
            <Select value={hemoglobin} onValueChange={setValue}>
                <SelectTrigger id="hemoglobin" autoFocus>
                    <SelectValue placeholder="Select haemoglobin level" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="<9.0">
                        &lt; 9.0
                    </SelectItem>
                    <SelectItem value="≥9.0">
                        &ge; 9.0
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
