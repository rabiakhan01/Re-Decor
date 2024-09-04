
export default function Button({ type, name, variant, color, gradiant, fullWidth, rounded, onClick }) {

    if (variant === 'contained') {
        if (color) {
            color = color
        }
        else if (gradiant) {
            color = `text-textWhiteColor  bg-gradient-to-r from-blueColor to-purpleColor`
        }
    }
    else if (variant === 'outlined') {
        if (color) {
            color = color
        }
        else if (gradiant) {
            color = `border border-purpleColor text-purpleColor`
        }
    }
    return (
        <button type={type} className={`${fullWidth ? 'md:w-full mobile:w-auto' : ''} flex justify-center items-center px-3 mobile:px-4 md:px-6 py-3 text-xs mobile:text-sm sm:text-base font-semibold capitalize ${color} ${rounded ? rounded : 'rounded-full'}`} id="button" onClick={onClick}>{name}</button>
    )
}