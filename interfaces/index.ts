export interface FormValidationInterface {
  data: object;
  callback: any;
  name: string;
  type: string;
  worksTime?: any;
  initialErrorState: any;
  inputsValidationData: object;
  forHtml?: string;
  textareaHeight: number | null;
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
  animation?: boolean;
  reverse?: boolean;
}
export interface SvgIconAnimInterface {
  type: string;
  width: number;
  height: number;
  color: string;
  duration: number;
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
  width?: string;
  height?: string;
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
  id: number;
  src: string;
  title: string;
  vendorCode: string;
  selectedStarsCount: number;
  price: string | number;
  buttonBorder?: boolean;
  addBasket: any;
  superPrice?: boolean;
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
export interface basketProductInterface {
  src: string;
  price: number;
  model: string;
  count: number;
  manufacturer: string;
  deleteBasketCount: any;
  incrementBasketCount: any;
  decrementBasketCount: any;
  edit?: boolean;
}
export interface IncDecInterface {
  id: number;
  count: number;
  increment: any;
  decrement: any;
}

export interface checkBoxInterface {
  width: string;
  height: string;
  border: string;
  padding: string;
  background: string;
  children?: any;
  callback?: any;
}
