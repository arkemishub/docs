import {Tabs} from 'nextra/components'
import {cn} from "@/lib/cn";
import {ReactNode} from "react";

interface RestfulApiResponseProps {
    title: string;
    children: ReactNode
}

export function RestfulApiResponse(props: RestfulApiResponseProps){
    const {title, children} = props;

    return(
        <div className="mt-4">
            <b>{title}</b>
            <div className="mt-4 border rounded border-[#4b5563]">
                <div className="mx-3 pt-4">
                    {children}
                </div>
            </div>
        </div>
    )
}
