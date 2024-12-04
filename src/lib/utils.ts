import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const duplicateValidation = (arr: string[], el: string) => {
    if (!arr.find((t) => t === el)) {
        arr.push(el)
        return arr
    } else {
        arr = arr.filter((t) => t !== el)
        return arr
    }
}