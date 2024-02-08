declare namespace API {

    type Banner = {
        id: number;
        client: 'pc' | 'mobile';
        name: string;
        picture: string;
        target: '_blank' | '_self';
        url?: string;
    }

    type Recruit = {
        id: number;
        name: string;
        summary: string;
        url?: string;
    }

    type Link = {
        id: number;
        name: string;
        summary: string;
        url?: string;
        is_system?: 1 | 2;
    }

    type Menu = {
        code: string;
        label: string;
        children: MenuItem[];
    }

    type MenuItem = {
        id: number;
        name: string;
        price: string;
    }

    type Member = {
        id: string;
        name: string;
        thumb: string;
        title: string;
        is_delegate?: number;
    }

    type Original = {
        id: string;
        name: string;
        thumb: string;
        summary: string;
    }

    type Time = {
        id: number;
        name: string;
        content: string;
        status: 'open' | 'close';
    }

    type MemberOfInformation = {
        id: string;
        name: string;
        nickname: string;
        thumb: string;
        ins: string;
        title: string;
        is_delegate?: number;
        introduce: string;
    }

    type OriginalOfInformation = {
        id: string;
        name: string;
        nickname: string;
        thumb: string;
        ins: string;
        summary: string;
        introduce: string;
    }

    type SEO = {
        title: string;
        keyword: string;
        description: string;
    }

    type  Page = {
        id: number;
        code: string;
        name: string;
        content: string;
    }

    type Setting = {
        copyright?: string;
        logo?: string;
        address?: string;
        map?: string;
        icon_down?: string;
        what_we_do?: string;
    }

    type Response<T> = {
        code: number;
        data?: T;
        message: string;
    }

    type Paginate<T> = {
        data?: T[];
        total: number;
        size: number;
        page: number;
    }
}