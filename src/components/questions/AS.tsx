import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type ASData = {
    as: string;
}

type ASProps = ASData & {
    updateFields: (fields: Partial<ASData>) => void;
}

export function AS({ as, updateFields }: ASProps) {
    const [value, setValue] = useState(as);

    useEffect(() => {
        updateFields({ as: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="as">Aortic Stenosis (AS) Severity</Label>
            <Select value={as} onValueChange={setValue}>
                <SelectTrigger id="as" autoFocus>
                    <SelectValue placeholder="Select AS severity" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="Moderate">
                        Moderate
                    </SelectItem>
                    <SelectItem value="Severe">
                        Severe
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
