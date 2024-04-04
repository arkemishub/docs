import {Tabs} from 'nextra/components'
import {cn} from "@/lib/cn";
import {ReactNode} from "react";

interface RestfulApiTableProps {
    columns: {value: string, label: string, url?: string}[];
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
                    {columns.map(c =>
                        <td>
                            {c.value === 'url' ?
                                <a className="underline text-[#1dc99e]" href={r[c.value]}>Discover more</a>
                            :
                                <span>{r[c.value]}</span>
                            }
                        </td>)}
                </tr>
            )}
            </tbody>
        </table>
    )
}
