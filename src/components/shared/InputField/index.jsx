import { useState } from "react";
import images from "../../../assets/images/images";

const InputField = ({ name, placeholder, type, value }) => {
    const [designPlaceholder, setDesignPlaceholder] = useState(false);
    const handelFocus = () => {
        setDesignPlaceholder(true);
    }
    return (
        <div className="relative">
            <input className="flex w-full py-2.5 px-2 rounded-md border border-platniumColor focus:border focus:border-irisColor focus:outline-none"
                placeholder={designPlaceholder ? '' : placeholder}
                name={name}
                type={type}
                onFocus={handelFocus}
            />
            {
                designPlaceholder && <p className="absolute px-1 -top-3.5 text-textGrayColor left-4 bg-white">{placeholder}</p>
            }
        </div>
    )
}

export default InputField;