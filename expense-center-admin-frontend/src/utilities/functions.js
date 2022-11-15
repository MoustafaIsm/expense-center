
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