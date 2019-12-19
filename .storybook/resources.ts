import { CalciteTheme } from "../src/components/interfaces";
import { Components } from "../src/components";

interface HTMLCalciteActionElement extends Components.CalciteAction, HTMLElement {}

type Direction = "ltr" | "rtl";

interface AttributeMetadata<T> {
  values: T[];
  defaultValue: T;
}

interface CommonAttributes {
  dir: AttributeMetadata<Direction>;
  theme: AttributeMetadata<CalciteTheme>;
}

const dirOptions: Direction[] = ["ltr", "rtl"];
const themeOptions: CalciteTheme[] = ["light", "dark"];

export const ATTRIBUTES: CommonAttributes = {
  dir: {
    values: dirOptions,
    defaultValue: dirOptions[0]
  },
  theme: {
    values: themeOptions,
    defaultValue: themeOptions[0]
  }
};

export function createSVG(path: string, size: number): string {
  return `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="${size}"
    width="${size}"
    fill="currentColor"
    viewBox="0 0 ${size} ${size}"
  >
    <path d="${path}" />
  </svg>
`;
}

export function createAction(
  { text, label, textEnabled, indicator, slot }: Partial<HTMLCalciteActionElement>,
  path?: string
): string {
  return `<calcite-action
    ${slot ? `slot="${slot}"` : ""}
    ${textEnabled ? "text-enabled" : ""}
    ${indicator ? "indicator" : ""}
    ${text ? `slot="${text}"` : ""}
    ${label ? `slot="${label}"` : ""}
  >${path ? createSVG(path, 16) : ""}</calcite-action>`;
}
