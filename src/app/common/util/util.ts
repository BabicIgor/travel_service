export class Util {
  public static nvlToNumber(value: any) {
    if (value == null) {
      return null;
    } else {
      return Number(value);
    }
  }
}
