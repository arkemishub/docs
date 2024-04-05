import {cn} from "@/lib/cn";
import {useRef} from "react";

interface HexDocsIframeProps {
    src: string;
    className: string;
}

export default function HexDocsIframe(props: HexDocsIframeProps){
    const {src, className} = props
    const ref = useRef<any>()

    return(
        <div>
            <iframe {...props} ref={ref} className={cn("w-full min-h-[800px]", className)} src={src} />
        </div>
    )
}
