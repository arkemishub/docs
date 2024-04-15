import Preview from "@/components/ui/preview";
import {Checkbox} from "@/components/ui/checkbox";

export default function CheckboxPreview(){
    return(
        <Preview>
            <>
                <Checkbox id="terms" />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept terms and conditions
                </label>
            </>
        </Preview>
    )
}
