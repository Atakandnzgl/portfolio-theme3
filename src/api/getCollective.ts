import { HttpMethod } from "@/constants/enums/HttpMethods";
import { QueryKeys } from "@/constants/enums/QueryKeys";
import { GET_ALL_FREELANCERS } from "@/constants/links";
import useGetData from "@/customHooks/useGetData";
import { MutableRefObject, useState } from "react";

interface CollectiveFreelancer {
    _id: string;
    fullName: string;
    linkNick: string;
    profileImg: string;
    role: string;
    showcase: string;
    workState: boolean;
}

interface CollectiveFreelancerResponse {
    freelancers: CollectiveFreelancer[]
    freelancersCount: number
}

export const getCollective = (currentPage: string, currentPageRef: MutableRefObject<number>): {
    data: CollectiveFreelancerResponse | undefined,
    isLoading: boolean,
    error: unknown
} => {
    const [freelancers, setFreelancers] = useState<CollectiveFreelancer[]>([])

    const { data, isLoading, error } = useGetData<CollectiveFreelancerResponse>({
        url: currentPageRef.current === +currentPage ? undefined : GET_ALL_FREELANCERS,
        method: HttpMethod.GET,
        queryKey: QueryKeys.COLLECTIVE,
        params: currentPage,
        onSuccess: (data) => {
            setFreelancers(prev => [...prev, ...data.freelancers])
            currentPageRef.current++
        }
    });

    return { data: { freelancers, freelancersCount: data?.freelancersCount as number }, isLoading, error }
} 