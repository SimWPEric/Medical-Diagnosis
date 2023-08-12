import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type CADData = {
    cad: string;
}

type CADProps = CADData & {
    updateFields: (fields: Partial<CADData>) => void;
}

export function CAD({ cad, updateFields }: CADProps) {
    const [value, setValue] = useState(cad);

    useEffect(() => {
        updateFields({ cad: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="cad">Coronary Artery Disease (CAD)</Label>
            <Select value={cad} onValueChange={setValue}>
                <SelectTrigger id="cad" autoFocus>
                    <SelectValue placeholder="Select CAD status" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="PCI only, Minor, Normal">
                        PCI only, Minor, Normal
                    </SelectItem>
                    <SelectItem value="CABG anatomy">
                        CABG anatomy
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
