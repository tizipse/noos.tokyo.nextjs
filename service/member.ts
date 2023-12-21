import Constants from "@/util/constants";
import {Basic} from "@/service/api";

export const doMemberOfOpening = async () => {

    let data: API.Member[] | undefined = undefined;

    const res = await fetch(Basic('/web/member/opening'))

    if (res.ok) {

        const response: API.Response<API.Member[]> = await res.json();

        if (response.code == Constants.Success) {
            data = response.data;
        }
    }

    return data;
};
export const doMemberOfInformation = async (id: string) => {

    let data: API.MemberOfInformation | undefined = undefined;

    const res = await fetch(Basic(`/web/members/${id}`))

    if (res.ok) {

        const response: API.Response<API.MemberOfInformation> = await res.json();

        if (response.code == Constants.Success) {
            data = response.data;
        }
    }

    return data;
};