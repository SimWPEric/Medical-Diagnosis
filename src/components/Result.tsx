import { useState, useEffect } from "react"
import { LoadingSkeleton } from "./LoadingSkeleton"

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

export function Result( {
    age,
    gender,
    as,
    mv_dz,
    op_risk,
    cad,
    symptoms,
    lvef,
    egfr,
    hemoglobin,
    cirhosis,
    cognition,
    frailty,
    handgrip,
    ambulation} : FormData ) {
    const inputFilePath = 'src/data/Data.json';
    const [result, setResult] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(inputFilePath);
                const jsonData = await response.json();
                for (let x of jsonData) {
                    if (
                        x["\ufeffAge"] === age &&
                        x.Gender === gender &&
                        x["AS "] === as &&
                        x["MV Dz"] === mv_dz &&
                        x["Op Risk Scores (e.g. STS, ESII)"] === op_risk &&
                        x.CAD === cad &&
                        x.Symptoms === symptoms &&
                        x.LVEF === lvef &&
                        x.eGFR === egfr &&
                        x.Haemoglobin === hemoglobin &&
                        x["Cirhosis or Lung Parenchymal Dz"] === cirhosis &&
                        x.Cognition === cognition &&
                        x["Frailty score"] === frailty &&
                        x.Handgrip === handgrip &&
                        x.Ambulation === ambulation
                    ) {
                        setResult(x["Valve Decision"]);
                    }
                }
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        }

        fetchData();
    }, []);
    return (
        <div>{result ? `Final diagnosis: ${result}` : <LoadingSkeleton />}</div>
    )
}