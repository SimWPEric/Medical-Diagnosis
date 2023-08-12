import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Progress } from "./ui/progress"
import { useMultiStepForm } from "@/hooks/useMultiStepForm"
import { AlertDestructive } from "@/AlertDestructive"

import { Age } from "./questions/Age"
import { Gender } from "./questions/Gender"
import { AS } from "./questions/AS"
import { MV_Dz } from "./questions/MV_Dz"
import { OP_Risk } from "./questions/OP_Risk"
import { CAD } from "./questions/CAD"
import { Symptoms } from "./questions/Symptoms"
import { LVEF } from "./questions/LVEF"
import { EGFR } from "./questions/EGFR"
import { Haemoglobin } from "./questions/Haemoglobin"
import { Cirhosis } from "./questions/Cirhosis"
import { Cognition } from "./questions/Cognition"
import { Frailty } from "./questions/Frailty"
import { Handgrip } from "./questions/Handgrip"
import { Ambulation } from "./questions/Ambulation"
import { Result } from "./Result"

type FormData = {
    age: string
    gender: string
    as: string
    mv_dz: string
    op_risk: string
    cad: string
    symptoms: string
    lvef: string
    egfr: string
    hemoglobin: string
    cirhosis: string
    cognition: string
    frailty: string
    handgrip: string
    ambulation:string
}

const INITIAL_DATA: FormData = {
    age: "",
    gender: "",
    as: "",
    mv_dz: "",
    op_risk: "",
    cad: "",
    symptoms: "",
    lvef: "",
    egfr: "",
    hemoglobin: "",
    cirhosis: "",
    cognition: "",
    frailty: "",
    handgrip: "",
    ambulation: ""
}



export function Questions() {
    const [data, setData] = useState(INITIAL_DATA)
    const [alert, setAlert] = useState(false)
    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields}
        })
    }
    const {
        steps,
        currentStepIndex,
        step,
        isFirstStep,
        isLastStep,
        isSecondLastStep,
        back,
        next
    } = useMultiStepForm([
        <Age {...data} updateFields={updateFields}/>,
        <Gender {...data} updateFields={updateFields}/>,
        <AS {...data} updateFields={updateFields}/>,
        <MV_Dz {...data} updateFields={updateFields}/>,
        <OP_Risk {...data} updateFields={updateFields}/>,
        <CAD {...data} updateFields={updateFields}/>,
        <Symptoms {...data} updateFields={updateFields}/>,
        <LVEF {...data} updateFields={updateFields}/>,
        <EGFR {...data} updateFields={updateFields}/>,
        <Haemoglobin {...data} updateFields={updateFields}/>,
        <Cirhosis {...data} updateFields={updateFields}/>,
        <Cognition {...data} updateFields={updateFields}/>,
        <Frailty {...data} updateFields={updateFields}/>,
        <Handgrip {...data} updateFields={updateFields}/>,
        <Ambulation {...data} updateFields={updateFields}/>,
        <Result {...data}/>
    ]);

    const handleSubmit = () => {
        let completed = true;
        for (const [key, value] of Object.entries(data)) {
            if (value === "") {
                displayAlert();
                completed = false;
                break;
            }
            console.log(`${key}: ${value}`);
        }
        if (completed) {
            next();
        }
    }

    const displayAlert = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 2000)
    }

    return (
        <div>
            <Card className="w-[350px]">
                <CardHeader>
                    <Progress value={((currentStepIndex + 1) / steps.length) * 100} />
                </CardHeader>
                <CardContent>
                    {step}
                </CardContent>
                <CardFooter className="flex justify-between">
                    {!isFirstStep ? <Button variant="outline" onClick={back}>Back</Button> : <div></div>}
                    {isLastStep ? <div></div>
                                : isSecondLastStep
                                ? <Button onClick={handleSubmit}>Diagnosis</Button>
                                : <Button onClick={next}>Next</Button> }
                </CardFooter>
            </Card>
            {alert && <AlertDestructive />}
        </div>
    )
}
