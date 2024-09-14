import { Icon } from "@mui/material";

const ListWithIcon = ({ icon, heading, desc }) => {
    return (
        <div className="w-full flex flex-col justify-start items-center gap-2 text-center">
            <div className="h-14 flex justify-end items-end">{icon}</div>
            <div className="h-fit">
                <div className="text-base font-bold">{heading}</div>
                <div className="text-sm line-clamp-3 480:line-clamp-2 text-textSecondaryColor">{desc}</div>
            </div>
        </div>
    )
}
export default ListWithIcon;