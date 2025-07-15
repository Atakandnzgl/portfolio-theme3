import { HttpMethod } from "@/constants/enums/HttpMethods";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";

interface MutationOptions {
    url: string;
    method: HttpMethod;
    data?: any;
    headers?: object
}

interface ErrorModel {
    error: string;
    message: string;
    statusCode: number;
}

export default function useMyMutation<T>() {
    const mutation: UseMutationResult<AxiosResponse<T>, AxiosError<ErrorModel>, MutationOptions> = useMutation({
        mutationFn: (options: MutationOptions) => {
            return axios({
                url: options.url,
                method: options.method,
                headers: options.headers,
                data: options.data,
            })
        },
        onError: (error) => {
            const errorMessage = error.response?.data.message || "An unexpected error occurred.";
            toast.error(errorMessage)
        },
    });

    return mutation;
} 