export const Platform = {
  TVING: "TVING",
  NETFLIX: "Netflix",
  WAVVE: "Wavve",
} as const;

export type Platform = (typeof Platform)[keyof typeof Platform];
