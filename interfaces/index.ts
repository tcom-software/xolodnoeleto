export interface InputValidationInterface {
  data: object;
  callback: any;
  name: string;
  type: string;
  worksTime?: any;
  initialErrorState: any;
  inputsValidationData: object;
  forHtml?: string;
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
  width: string;
  height: string;
  placeholder: string;
  svgSize: number;
  callback?: any;
}
export interface ImageInterface {
  simpleWeb: string;
  simpleMobile: string;
  webpWeb: string;
  webpMobile: string;
}
export interface ButtonInterface {
  type: string;
  width: string;
  height: string;
  color?: string;
  border?: string;
  background?: string;
  fontWeight?: number;
}
export interface productInterface {
  src: string;
  title: string;
  vendorCode: string;
  selectedStarsCount: number;
  price: string | number;
  buttonBorder?: boolean;
}
export interface GlobalSectionInterface {
  children?: any;
  isWeb: boolean;
  webPadding?: string;
  mobilePadding?: string;
  isMobile: boolean;
  overflowStyle?: boolean;
  borderTop?: boolean;
  webBackground: string;
  borderBottom?: boolean;
  mobileBackground?: string;
  width?: string;
  height?: string;
  heightMobile?: string;
  widthMobile?: string;
}
export interface SelectInterface {
  title: string;
  name: string;
  children: any;
  data: object;
  callback: any;
  errorStyleCallback: any;
  forHtml?: string;
}
