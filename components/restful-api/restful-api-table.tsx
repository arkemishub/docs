import {Tabs} from 'nextra/components'
import {cn} from "@/lib/cn";
import {ReactNode} from "react";

interface RestfulApiTableProps {
    columns: {value: string, label: string}[];
    rows: any[]
}

export function RestfulApiTable(props: RestfulApiTableProps){
    const {columns, rows} = props;
    return(
        <table className="mt-4 w-full">
            <thead>
                <tr className="font-semibold">
                    {columns.map(c => <td>{c.label}</td>)}
                </tr>
            </thead>
            <tbody>
            {rows.map(r =>
                <tr>
                    {columns.map(c => <td>{r[c.value]}</td>)}
                </tr>
            )}
            </tbody>
        </table>
    )
}
