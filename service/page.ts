import Constants from "@/util/constants";
import {Basic} from "@/service/api";

export const doPage = async (code: string) => {

    let data: API.Page | undefined = undefined;

    const res = await fetch(Basic(`/web/page?code=${code}`))

    if (res.ok) {

        const response: API.Response<API.Page> = await res.json();

        if (response.code == Constants.Success) {
            data = response.data;
        }
    }

    return data;
};