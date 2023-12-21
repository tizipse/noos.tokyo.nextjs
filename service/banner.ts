import Constants from "@/util/constants";
import {Basic} from "@/service/api";

export const doBannerOfOpening = async () => {

    let data: API.Banner[] | undefined = undefined;

    const res = await fetch(Basic('/web/banner/opening'))

    if (res.ok) {

        const response: API.Response<API.Banner[]> = await res.json();

        if (response.code == Constants.Success) {
            data = response.data;
        }
    }

    return data;
};