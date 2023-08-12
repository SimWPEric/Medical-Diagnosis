import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type GenderData = {
    gender: string;
}

type GenderProps = GenderData & {
    updateFields: (fields: Partial<GenderData>) => void;
}

export function Gender({ gender, updateFields }: GenderProps) {
    const [value, setValue] = useState(gender);

    useEffect(() => {
        updateFields({ gender: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="gender">Gender</Label>
            <Select value={gender} onValueChange={setValue}>
                <SelectTrigger id="gender" autoFocus>
                    <SelectValue placeholder="Select a gender" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="Female">
                        Female
                    </SelectItem>
                    <SelectItem value="Male">
                        Male
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
