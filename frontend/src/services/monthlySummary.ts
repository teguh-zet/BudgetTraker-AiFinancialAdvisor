import api from "@/api";
import { handleApiError } from "@/utils/handleApiError";
import getTokenHeader from "@/utils/getTokenHeader";

export const fetchAllMonthlySummaries = async () => {
    try {
        const res = await api.get('/monthly-summary', {
            headers: getTokenHeader()
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Monthly Summary Error");
    }
}

export const fetchAllMonthlySummaryById = async (id: number) => {
    try {
        const res = await api.get(`/monthly-summary/${id}`, {
            headers: getTokenHeader()
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Monthly Summary Error");
    }
}
export const createMonthlySummary = async (data: Record<string, unknown>) => {
    try {
        const res = await api.post('/monthly-summary', data, {
            headers: getTokenHeader()
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Monthly Summary Error");
    }
}
export const updateMonthlySummary = async (id: number, data: Record<string, unknown>) => {
    try {
        const res = await api.put(`/monthly-summary/${id}`, data, {
            headers: getTokenHeader()
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Monthly Summary Error");
    }
}
export const deleteMonthlySummary = async (id: number) => {
    try {
        const res = await api.delete(`/monthly-summary/${id}`, {
            headers: getTokenHeader()
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Monthly Summary Error");
    }
}

export const generateMonthlySummary = async () => {
    try {
        const res = await api.post('/monthly-summary/generate', {}, {
            headers: getTokenHeader(),
            timeout: 30000
        });
        return res.data;
    } catch (error) {
        handleApiError(error, "Monthly Summary Error");
    }
}
