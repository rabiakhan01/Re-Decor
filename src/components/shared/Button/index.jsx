import Spinner from "../Spinner"

export default function Button({ type, name, variant, color, gradiant, fullWidth, rounded, onClick, className, disabled, loading }) {

    if (variant === 'contained') {
        if (gradiant) {
            color = `text-textWhiteColor  bg-gradient-to-r from-blueColor to-purpleColor hover:opacity-90`
        }
    }
    else if (variant === 'outlined') {
        if (gradiant) {
            color = `border border-purpleColor text-purpleColor hover:bg-purpleColor/10 !font-semibold`
        }
    }
    return (
        <button disabled={disabled} type={type} className={`${className} ${fullWidth ? 'w-full' : ''} flex justify-center items-center px-3 mobile:px-4 md:px-6 py-2 text-xs mobile:text-sm sm:text-base font-normal disabled:cursor-not-allowed capitalize ${color} ${rounded ? rounded : 'rounded-full !py-[10px] !px-5'}`} id="button" onClick={onClick}>{loading ? <Spinner /> : name}</button>
    )
}