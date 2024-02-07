import Constants from "@/util/constants";
import {Basic} from "@/service/api";

export const doOriginalOfOpening = async () => {

    let data: API.Original[] | undefined = undefined;

    const res = await fetch(Basic('/web/original/opening'))

    if (res.ok) {

        const response: API.Response<API.Original[]> = await res.json();

        if (response.code == Constants.Success) {
            data = response.data;
        }
    }

    return data;
};

export const doOriginalOfInformation = async (id: string) => {

    let data: API.OriginalOfInformation | undefined = undefined;

    const res = await fetch(Basic(`/web/originals/${id}`))

    if (res.ok) {

        const response: API.Response<API.OriginalOfInformation> = await res.json();

        if (response.code == Constants.Success) {
            data = response.data;
        }
    }

    return data;
};