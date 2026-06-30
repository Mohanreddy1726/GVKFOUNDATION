export const STATS = [
  { id: "students",   value: "95%",  labelKey: "stats.students",   numericTarget: 95, suffix: "%" },
  { id: "lives",      value: "700+", labelKey: "stats.lives",      numericTarget: 700, suffix: "+" },
  { id: "programs",   value: "300+", labelKey: "stats.programs",   numericTarget: 300, suffix: "+" },
  { id: "volunteers", value: "500+", labelKey: "stats.volunteers", numericTarget: 500, suffix: "+" },
];

export function formatStat(stat) {
  return stat;
}
