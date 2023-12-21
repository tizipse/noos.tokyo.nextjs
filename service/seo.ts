import Constants from "@/util/constants";
import {Basic} from "@/service/api";

export const doSEO = async (channel: 'member', id: string) => {

    let data: API.SEO | undefined = undefined;

    const res = await fetch(Basic(`/shop/seo?channel=${channel}&id=${id}`))

    if (res.ok) {

        const response: API.Response<API.SEO> = await res.json();

        if (response.code == Constants.Success) {
            data = response.data;
        }
    }

    return data;
};