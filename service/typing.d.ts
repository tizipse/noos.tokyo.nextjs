declare namespace API {

    type Banner = {
        id: number;
        client: 'pc' | 'mobile';
        name: string;
        picture: string;
        target: '_blank' | '_self';
        url?: string;
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

    type SEO = {
        title: string;
        keyword: string;
        description: string;
    }

    type Setting = {
        copyright?: string;
        logo?: string;
        address?: string;
        map?: string;
        icon_down?: string;
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