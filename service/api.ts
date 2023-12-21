export const Basic = (uri: string) => {

    let domain = process.env.DOMAIN;

    if (!domain) {
        domain = process.env.NEXT_PUBLIC_DOMAIN;
    }

    return domain + uri;
}