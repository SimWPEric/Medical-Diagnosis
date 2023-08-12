import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type CognitionData = {
    cognition: string;
}

type CognitionProps = CognitionData & {
    updateFields: (fields: Partial<CognitionData>) => void;
}

export function Cognition({ cognition, updateFields }: CognitionProps) {
    const [value, setValue] = useState(cognition);

    useEffect(() => {
        updateFields({ cognition: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="cognition">Cognition</Label>
            <Select value={cognition} onValueChange={setValue}>
                <SelectTrigger id="cognition" autoFocus>
                    <SelectValue placeholder="Select cognition status" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="Normal, mild">
                        Normal, mild
                    </SelectItem>
                    <SelectItem value="Dementia">
                        Dementia
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
