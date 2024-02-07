import Constants from "@/util/constants";
import {Basic} from "@/service/api";

export const doRecruitOfOpening = async () => {

    let data: API.Recruit[] | undefined = undefined;

    const res = await fetch(Basic('/web/recruit/opening'))

    if (res.ok) {

        const response: API.Response<API.Recruit[]> = await res.json();

        if (response.code == Constants.Success) {
            data = response.data;
        }
    }

    return data;
};