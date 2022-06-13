import {
    lightFormat,
} from 'date-fns';

/**
 * Return the current year
 */
export function todayYear(): string {
    return lightFormat(new Date(), 'yyyy');
}

export function readingTime(text: string): Number {
    const wpm = 210;
    const words = stripHtml(text).trim().split(/\s+/).length;

    return Math.ceil(words / wpm);
}

export function stripHtml(dirtyString: string): string {
    return dirtyString.replace(/<[^>]+>/ig,'');
}
