export interface GalleryImage {
    url: string;
    alt: string;
}

export interface BookMetadata {
    isbn: string;
    releaseDate: string;
    price: string;
    currency: string;
}

export interface SiteConfig {
    title: string;
    description: string;
    canonical: string;
    locale: string;
    image: string;
}

export interface MenuItem {
    title: string;
    path?: string;
    children?: MenuItem[];
    external?: boolean;
}
