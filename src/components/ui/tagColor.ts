export type TagVariant = "brand";

export function tagStyle(_index: number) {
  return {
    background: "rgb(58, 179, 181)",
    color: "#ffffff",
  };
}

export function tagVariant(_index: number): TagVariant {
  return "brand";
}
