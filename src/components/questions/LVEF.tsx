import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type LVEFData = {
    lvef: string;
}

type LVEFProps = LVEFData & {
    updateFields: (fields: Partial<LVEFData>) => void;
}

export function LVEF({ lvef, updateFields }: LVEFProps) {
    const [value, setValue] = useState(lvef);

    useEffect(() => {
        updateFields({ lvef: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="lvef">Left Ventricular Ejection Fraction (LVEF)</Label>
            <Select value={lvef} onValueChange={setValue}>
                <SelectTrigger id="lvef" autoFocus>
                    <SelectValue placeholder="Select LVEF status" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="≥50%">
                        &ge; 50%
                    </SelectItem>
                    <SelectItem value="<50%">
                        &lt; 50%
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
