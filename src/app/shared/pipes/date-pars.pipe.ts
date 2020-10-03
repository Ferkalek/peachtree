import { Pipe, PipeTransform } from "@angular/core";

const monthNames = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "June",
  "July",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec.",
];

@Pipe({
  name: "datePars",
})
export class DateParsPipe implements PipeTransform {
  getDate(ms: number): string {
    const data = new Date(ms);
    return monthNames[data.getMonth()] + " " + data.getDate();
  }

  transform(value: any): string {
    if (typeof value !== "string" && typeof value !== "number") {
      return "";
    } else {
      let ms = 0;
      if (typeof value === "string") {
        ms = Date.parse(value);
      } else {
        ms = value;
      }
      return this.getDate(ms);
    }
  }
}
