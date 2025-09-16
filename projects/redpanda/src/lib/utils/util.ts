type DateFormat = 'HH:mm' | 'YYYY-MM-DD' | 'YYYY-MM-DD HH:mm';
export class Util {
  public static getMoneyFormat(data: string) {
    return ('' + data).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  public static isRunningOnSmallScreen(): boolean {
    return window.innerWidth < 772;
  }

  public static isRunningOnMobile(): boolean {
    return !this.isRunningOnWindows;
  }

  public static isRunningOnWindows(): boolean {
    return navigator.platform.startsWith('Win');
  }

  public static getRunningPlatform(): string {
    return navigator.platform;
  }

  public static getTotalFromArray(array: [], name: string): number {
    return array.map((item) => +item[name]).reduce((prev, next) => prev + next);
  }
}
