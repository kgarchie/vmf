export function throttle(method: Function, delay: number, context: any): () => void {
    let inThrottle: boolean
    return function () {
        if (inThrottle) return

        method.apply(context, arguments)

        inThrottle = true
        setTimeout(() => (inThrottle = false), delay)
    }
}

export function debounce(method: Function, delay: number, context: any): () => void {
    let timer: ReturnType<typeof setTimeout>
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            method.apply(context, arguments)
        }, delay)
    }
}