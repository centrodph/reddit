export function unixTimestampToDate(time: number): string {
  return new Date(time * 1000).toLocaleDateString();
}
