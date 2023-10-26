export interface Post {
    links:           Links;
    title:           string;
    event_date_utc:  Date;
    event_date_unix: number;
    details:         string;
    id:              string;
}

export interface Links {
    article: string;
}
