export const getUpperCase = (text:string):string => text.slice(0, 1).toUpperCase() + text.slice(1);
export const getActiveClass = (isFav: boolean, className:string):string => isFav ? `${className}--active` : '';
