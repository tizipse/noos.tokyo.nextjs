import {Basic} from "@/service/api";
import Constants from "@/util/constants";

export const doSetting = async () => {

    let data: API.Setting = {};

    const res = await fetch(Basic(`/web/setting`), {
        next: {revalidate: 600}
    });

    if (res.ok) {

        const response: API.Response<API.Setting> = await res.json();

        if (response.code == Constants.Success && response.data) {
            data = response.data;
        }
    }

    return data;
};