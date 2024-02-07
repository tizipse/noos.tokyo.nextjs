import Constants from "@/util/constants";
import {Basic} from "@/service/api";

export const doLinkOfOpening = async () => {

    let data: API.Link[] | undefined = undefined;

    const res = await fetch(Basic('/web/link/opening'))

    if (res.ok) {

        const response: API.Response<API.Link[]> = await res.json();

        if (response.code == Constants.Success) {
            data = response.data;
        }
    }

    return data;
};