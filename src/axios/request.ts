import axiosInstance from "../config/axiosConfig.ts";
import Tarefa from "../interfaces/Tarefa.ts";
import ResponseData from "../interfaces/Response.ts";

const api = axiosInstance;

const request = {
    postTarefa: async (data: Tarefa): Promise<ResponseData<Tarefa>> => {
        return await api.post("/tarefa", data)
    },
    getTarefas: async (): Promise<ResponseData<Tarefa[]>> => {
        return await api.get("/tarefa")
    },
    getTarefaPorId: async (id: number): Promise<ResponseData<Tarefa>> => {
        return await api.get(`/tarefa/${id}`)
    },
    updateTarefa: async (id: number, data: Tarefa): Promise<ResponseData<Tarefa>> => {
        return await api.put(`/tarefa/${id}`, data)
    },
    deleteTarefa: async (id: number): Promise<ResponseData<any>> => {
        return await api.delete(`/tarefa/${id}`)
    }

}

export {api, request}