import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export const createPageUrl = (page) => {
    if (page === 'Home') return '/';
    return `/${page.toLowerCase()}`;
};
