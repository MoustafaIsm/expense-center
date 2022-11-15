import { faTableColumns, faShapes, faChartSimple, faMessage } from '@fortawesome/free-solid-svg-icons';
import { PAGE_TYPES } from './constants';

export const handleError = (error) => {
    if (error.status === 401) {
        localStorage.clear();
        window.location.href = '/';
    } else {
        console.log(error);
    }
}

export const getCurrentDate = () => {
    const date = new Date();
    return { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() };
}

export const getPage = (type) => {
    let icon = '';
    switch (type) {
        case PAGE_TYPES[0]:
            icon = faTableColumns;
            break;
        case PAGE_TYPES[1]:
            icon = faShapes;
            break;
        case PAGE_TYPES[2]:
            icon = faChartSimple;
            break;
        case PAGE_TYPES[3]:
            icon = faMessage;
            break;
        default:
            break;
    }
    return icon;
}