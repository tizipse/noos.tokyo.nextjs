import Constants from "@/util/constants";
import {Basic} from "@/service/api";

export const doTimeOfOpening = async () => {

    let data: API.Time[] | undefined = undefined;

    const res = await fetch(Basic('/web/time/opening'))

    if (res.ok) {

        const response: API.Response<API.Time[]> = await res.json();

        if (response.code == Constants.Success) {
            data = response.data;
        }
    }

    return data;
};