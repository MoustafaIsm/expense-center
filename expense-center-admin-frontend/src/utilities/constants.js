
// Page titles
const DASHBOARD = "Dashboard";
const CATEGORIES = "Categories";
const STATISTICS = "Statistics";
const FEEDBACK = "Feedback";

const PAGE_TYPES = [DASHBOARD, CATEGORIES, STATISTICS, FEEDBACK];

const HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

const BASE_URL = 'http://192.168.0.113:8000/api';

const LIMIT = 10;

export {
    DASHBOARD,
    STATISTICS,
    CATEGORIES,
    FEEDBACK,
    PAGE_TYPES,
    HEADERS,
    BASE_URL,
    LIMIT
};