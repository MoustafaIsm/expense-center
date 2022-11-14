
export const handleError = (error) => {
    if (error.status === 401) {
        localStorage.clear();
        window.location.href = '/';
    } else {
        console.log(error);
    }
}