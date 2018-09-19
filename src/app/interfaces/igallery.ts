import { IPhoto } from './iphoto';

export interface IGallery {
    galleryId: string;
    title: string;
    dateCreated: string;
    thumbUrl: string;
    description: string;
    tags?: any;
    photos: IPhoto[];
}
