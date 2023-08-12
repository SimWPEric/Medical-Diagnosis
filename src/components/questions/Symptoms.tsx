import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type SymptomsData = {
    symptoms: string;
}

type SymptomsProps = SymptomsData & {
    updateFields: (fields: Partial<SymptomsData>) => void;
}

export function Symptoms({ symptoms, updateFields }: SymptomsProps) {
    const [value, setValue] = useState(symptoms);

    useEffect(() => {
        updateFields({ symptoms: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="symptoms">Symptoms</Label>
            <Select value={symptoms} onValueChange={setValue}>
                <SelectTrigger id="symptoms" autoFocus>
                    <SelectValue placeholder="Select symptom status" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="Symptomatic">
                        Symptomatic
                    </SelectItem>
                    <SelectItem value="Asymptomatic">
                        Asymptomatic
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
