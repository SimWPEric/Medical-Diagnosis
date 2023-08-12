import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type MVDzData = {
    mv_dz: string;
}

type MVDzProps = MVDzData & {
    updateFields: (fields: Partial<MVDzData>) => void;
}

export function MV_Dz({ mv_dz, updateFields }: MVDzProps) {
    const [value, setValue] = useState(mv_dz);

    useEffect(() => {
        updateFields({ mv_dz: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="mv_dz">Mitral Valve Disease (MV Dz) Severity</Label>
            <Select value={mv_dz} onValueChange={setValue}>
                <SelectTrigger id="mv_dz" autoFocus>
                    <SelectValue placeholder="Select MV Dz severity" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="Mild, Moderate">
                        Mild, Moderate
                    </SelectItem>
                    <SelectItem value="Severe">
                        Severe
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
