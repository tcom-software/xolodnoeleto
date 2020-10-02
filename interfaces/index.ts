export interface InputValidationInterface {
  data: object;
  callback: any;
  name: string;
  type: string;
  worksTime?: any;
  initialErrorState: any;
  inputsValidationData: object;
}

export interface HeadInfo {
  metaTitle: string;
  metaDescription: string;
  metaKeyWord: string;
}
export interface SvgProperty {
  type: string;
  width: number;
  height: number;
  color?: string;
  callback?: any;
}
export interface InputInterface {
  labelTitle?: string;
  search?: boolean;
  svgColor?: string;
  width: number;
  height: number;
  placeholder: string;
  svgSize: number;
  callback?: any;
}
export interface ImageInterface {
  jpg: string;
  jpgMobile: string;
  webp: string;
  webpMobile: string;
}
export interface ButtonInterface {
  type: string;
  width: string;
  height: string;
}
export interface productInterface {
  src: string;
  title: string;
  vendorCode: string;
  selectedStarsCount: number;
  price: string | number;
  buttonBorder?: boolean;
}
