import {Tabs} from 'nextra/components'
import {cn} from "@/lib/cn";
import {ReactNode} from "react";

interface RestfulApiRequestProps {
    title: string;
    method: 'get' | 'post' | 'put' | 'delete'
    path: string;
    children: ReactNode
}

export function RestfulApiRequest(props: RestfulApiRequestProps){
    const {title, method, path, children} = props;

    const MethodChip = () =>
        <div className={cn("text-xs font-semibold flex justify-center items-center rounded-full px-2 w-fit",
            method === 'get' && 'bg-[#12a046]',
            method === 'post' && 'bg-[#eaa008]',
            method === 'put' && 'bg-[#2170bf]',
            method === 'delete' && 'bg-[#bf2c2c]',
        )}>
        {method.toUpperCase()}
    </div>

    return(
        <>
            <b>{title}</b>
            <div className="mt-4 border rounded border-[#4b5563]">
                <div className="p-3 flex gap-4 border-b border-[#4b5563]">
                    <MethodChip/>
                    <div>{path}</div>
                </div>
                <div className="mx-3">
                    {children}
                </div>
            </div>
        </>
    )
}
