import './Button.module.css';
export default function Button({ name, variant, color, gradiant, fullWidth, rounded }) {

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
        <button className={`${fullWidth ? 'md:w-full mobile:w-auto' : ''} flex justify-center items-center px-3 mobile:px-4 md:px-6 py-2.5 text-xs mobile:text-sm sm:text-base font-semibold capitalize ${color} ${rounded ? rounded : 'rounded-full'}`} id="button">{name}</button>
    )
}