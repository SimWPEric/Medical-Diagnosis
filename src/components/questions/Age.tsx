import { useState, useEffect} from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type AgeData = {
    age: string
}

type AgeProps = AgeData & {
    updateFields: (fields: Partial<AgeData>) => void
}

export function Age( { age, updateFields } : AgeProps ) {
    const [value, setValue] = useState(age);
    useEffect(() => {
        updateFields({age: value})
    }, [value])
    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="age">Age</Label>
            <Select value={age} onValueChange={setValue} >
                <SelectTrigger id="age" autoFocus>
                    <SelectValue placeholder="Select an age range" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="<70" >
                        &lt; 70
                    </SelectItem>
                    <SelectItem value="70-80">
                        70 - 80
                    </SelectItem>
                    <SelectItem value=">80">
                        &gt; 80
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
