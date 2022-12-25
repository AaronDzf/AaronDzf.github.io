export function GetWindowWidth() {
    if (typeof window === 'undefined') {
        return null;
    }
    return window.innerWidth;
}
