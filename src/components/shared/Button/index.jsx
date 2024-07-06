export default function Button({ name, variant, color, gradiant, fullWidth }) {

    if (variant === 'filled') {
        if (color) {
            color = color
        }
        else if (gradiant) {
            color = `bg-gradient-to-r from-blueColor to-purpleColor`
        }
    }
    else if (variant === 'contained') {
        if (color) {
            color = color
        }
        else if (gradiant) {
            color = `border border-gradiant-to-r from-blueColor via-blueColor to-purpleColor`
        }
    }
    return (
        <button className={`${fullWidth ? 'w-full mobile:w-auto' : ''} flex justify-center items-center px-3 mobile:px-4 md:px-6 py-2.5 text-xs mobile:text-sm sm:text-base text-textWhiteColor font-semibold uppercase ${color} rounded-full`}>{name}</button>
    )
}