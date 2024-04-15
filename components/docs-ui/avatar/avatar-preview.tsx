import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Preview from "@/components/ui/preview";

export default function AvatarPreview() {
    return(
        <Preview>
            <Avatar>
                <AvatarImage src="https://arkehub.com/icons/mokka.svg" alt="avatar" />
                <AvatarFallback>AK</AvatarFallback>
            </Avatar>
        </Preview>
    )
}
