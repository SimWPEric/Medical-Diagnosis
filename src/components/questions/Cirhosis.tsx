import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type CirhosisData = {
    cirhosis: string;
}

type CirhosisProps = CirhosisData & {
    updateFields: (fields: Partial<CirhosisData>) => void;
}

export function Cirhosis({ cirhosis, updateFields }: CirhosisProps) {
    const [value, setValue] = useState(cirhosis);

    useEffect(() => {
        updateFields({ cirhosis: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="cirhosis">Cirrhosis or Lung Parenchymal Disease</Label>
            <Select value={cirhosis} onValueChange={setValue}>
                <SelectTrigger id="cirhosis" autoFocus>
                    <SelectValue placeholder="Select cirrhosis or lung disease status" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="No Cirrhosis, Lung">
                        No Cirrhosis, Lung
                    </SelectItem>
                    <SelectItem value="Cirrhosis, Lung">
                        Cirrhosis, Lung
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
