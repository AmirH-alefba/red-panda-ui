export type ThemePalette = 'square' | 'round';
export type ColorState =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

export type ButtonType = 'button';

export type LayoutRadioButtons = 'row' | 'column';

export type InputType = 'number' | 'password' | 'text';

export type MenuItem<T> = {
  title: T;
  value: T;
};

export type ButtonSize = 'xsmall' | 'small' | 'medium';
export type Color = 'White' | 'Orange' | 'Purple';
export type ConfirmDialog = {
  title: string;
  text: string;
  confirmBtn: string;
  cancelBtn: string;
};

export enum DetailViewers {
  BILL = 'bill',
  DRIVER = 'driver',
  MANIFEST = 'manifest',
  SERVICE = 'service',
  VEHICLE = 'vehicle',
}
