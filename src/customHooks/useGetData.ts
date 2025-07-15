import { HttpMethod } from "@/constants/enums/HttpMethods";
import { QueryKeys } from "@/constants/enums/QueryKeys";
import { useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

interface GetDataOptions<T> {
    url?: string;
    queryKey: QueryKeys;
    method: HttpMethod;
    onSuccess?: (data: T) => void;
    onError?: (err: any) => void;
    headers?: object
    params?: string
}

export default function useGetData<T>(options: GetDataOptions<T>): UseQueryResult<T> & { isFetchingData: boolean } {
    const queryClient = useQueryClient();

    const getData = async (): Promise<T> => {
        const urlWithParams = options.params ? options.url + options.params : options.url;

        try {
            const response = await axios({
                url: urlWithParams,
                method: options.method,
                headers: options.headers,
            });

            options.onSuccess?.(response.data);
            return response.data;
        } catch (err) {
            options.onError?.(err);
            throw err;
        }
    };

    const queryEnabled = Boolean(options.url);

    const queryResult = useQuery({
        queryKey: [options.queryKey, options.params],
        queryFn: getData,
        enabled: queryEnabled,
        retry: 0,
    });

    const isFetchingData = queryEnabled ? queryResult.isLoading : false;

    return { ...queryResult, isFetchingData };
} 