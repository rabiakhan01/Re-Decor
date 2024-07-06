export default function Button({ name, variant, color, gradiant }) {

    if (variant === 'filled') {
        if (color) {
            color = color
        }
        else if (gradiant) {
            color = `bg-gradient-to-r from-pinkColor via-pinkColor to-skyColor`
        }
    }
    else if (variant === 'contained') {
        if (color) {
            color = color
        }
        else if (gradiant) {
            color = `border border-gradiant-to-r from-pinkColor via-pinkColor to-skyColor`
        }
    }
    return (
        <button className={`flex px-6 sm:px-8 py-2 sm:py-2.5 text-sm sm:text-base text-textWhiteColor font-semibold uppercase ${color} rounded-full`}>{name}</button>
    )
}