import {Tabs} from 'nextra/components'
import {cn} from "@/lib/cn";
import {ReactNode} from "react";

interface RestfulApiContainerProps {
    children: any;
}

export function RestfulApiContainer(props: RestfulApiContainerProps){
    const {children} = props;
    return(children &&
        <div className="mt-4 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
                {children[0]}
            </div>
            <div className="col-span-12 lg:col-span-6">
                <div className="sticky top-[40px]">
                {children[1]}
                </div>
            </div>
            {children[2]}
        </div>
    )
}
