import Constants from "@/util/constants";
import {Basic} from "@/service/api";

export const doMenuOfOpening = async () => {

    let data: API.Menu[] | undefined = undefined;

    const res = await fetch(Basic('/web/menu/opening'))

    if (res.ok) {

        const response: API.Response<API.Menu[]> = await res.json();

        if (response.code == Constants.Success) {
            data = response.data;
        }
    }

    return data;
};