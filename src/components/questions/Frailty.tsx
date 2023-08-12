import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type FrailtyData = {
    frailty: string;
}

type FrailtyProps = FrailtyData & {
    updateFields: (fields: Partial<FrailtyData>) => void;
}

export function Frailty({ frailty, updateFields }: FrailtyProps) {
    const [value, setValue] = useState(frailty);

    useEffect(() => {
        updateFields({ frailty: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="frailty">Frailty Score</Label>
            <Select value={frailty} onValueChange={setValue}>
                <SelectTrigger id="frailty" autoFocus>
                    <SelectValue placeholder="Select frailty score" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="Frail">
                        Frail
                    </SelectItem>
                    <SelectItem value="PreFrail">
                        PreFrail
                    </SelectItem>
                    <SelectItem value="NonFrail">
                        NonFrail
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
