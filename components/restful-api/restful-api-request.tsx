import {cn} from "@/lib/cn";
import {ReactNode} from "react";

type Method = 'get' | 'post' | 'put' | 'delete';

interface RestfulApiRequestProps {
    title: string;
    method: Method | Method[]
    params?: string[]
    path: string;
    children: ReactNode
}

export function RestfulApiRequest(props: RestfulApiRequestProps){
    const {title, method, params, path, children} = props;

    const MethodChip = ({method}: {method: Method}) =>
        <div className={cn("h-6 text-xs font-semibold flex justify-center items-center rounded-full px-2 w-fit",
            method === 'get' && 'bg-[#12a046]',
            method === 'post' && 'bg-[#eaa008]',
            method === 'put' && 'bg-[#2170bf]',
            method === 'delete' && 'bg-[#bf2c2c]',
        )}>
        {method.toUpperCase()}
    </div>

    const ParamsChip = ({children}:{children: ReactNode}) =>
        <div className={cn("h-6 text-xs font-semibold flex justify-center items-center rounded-full px-2 w-fit border border-[#12a046]")}>
            {children}
        </div>

    return(
        <>
            <b>{title}</b>
            <div className="mt-4 border rounded border-[#4b5563]">
                <div className="p-3 flex items-center gap-3 border-b border-[#4b5563]">
                    <div className="flex gap-2">
                     {Array.isArray(method) ? method.map(m => <MethodChip method={m}/>): <MethodChip method={method}/>}
                    </div>
                    <div className="text-sm max-w-[452px] text-wrap">{path}</div>
                </div>
                {params &&
                    <div className="p-3 flex items-center gap-2 border-b border-[#4b5563]">
                        {params.map(p => <ParamsChip>{p}</ParamsChip>)}
                    </div>
                }
                <div className="mx-3">
                    {children}
                </div>
            </div>
        </>
    )
}
