import { ConfirmType, LanguageCode, MeetingTime, TourType } from './tour.enums';

export interface Tour {
  imgUrl: string;
  type: string;
  city: string;
  title: string;
  detailType: string;
  starRate: number;
  reviewCount: number;
  onSale: boolean;
  price: number;
  realPrice: number;
  startDate: string;
  endDate: string;
  tourType: TourType;
  duration: string;
  meetingTime: MeetingTime;
  language: LanguageCode[];
  confirmType: ConfirmType;
  lowestGurantee: boolean;
}
