import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type EGFRData = {
    egfr: string;
}

type EGFRProps = EGFRData & {
    updateFields: (fields: Partial<EGFRData>) => void;
}

export function EGFR({ egfr, updateFields }: EGFRProps) {
    const [value, setValue] = useState(egfr);

    useEffect(() => {
        updateFields({ egfr: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="egfr">Estimated Glomerular Filtration Rate (eGFR)</Label>
            <Select value={egfr} onValueChange={setValue}>
                <SelectTrigger id="egfr" autoFocus>
                    <SelectValue placeholder="Select eGFR status" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="≥30">
                        &ge; 30
                    </SelectItem>
                    <SelectItem value="<30">
                        &lt; 30
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
