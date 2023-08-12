import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type OPRiskData = {
    op_risk: string;
}

type OPRiskProps = OPRiskData & {
    updateFields: (fields: Partial<OPRiskData>) => void;
}

export function OP_Risk({ op_risk, updateFields }: OPRiskProps) {
    const [value, setValue] = useState(op_risk);

    useEffect(() => {
        updateFields({ op_risk: value });
    }, [value]);

    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor="op_risk">Operational Risk Scores (e.g. STS, ESII)</Label>
            <Select value={op_risk} onValueChange={setValue}>
                <SelectTrigger id="op_risk" autoFocus>
                    <SelectValue placeholder="Select operational risk score" />
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="Intermediate">
                        Intermediate
                    </SelectItem>
                    <SelectItem value="High">
                        High
                    </SelectItem>
                    <SelectItem value="Low">
                        Low
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
