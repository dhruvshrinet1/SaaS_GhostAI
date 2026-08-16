const ADJECTIVES = ["Quiet", "Curious", "Swift", "Gentle", "Bright", "Calm", "Bold", "Sly"];
const ANIMALS = ["Fox", "Owl", "Otter", "Wolf", "Lynx", "Hawk", "Bear", "Wren"];
const COLORS = ["#F97316", "#EAB308", "#22C55E", "#06B6D4", "#3B82F6", "#8B5CF6", "#EC4899", "#EF4444"];

export type GuestUser = {
  id: string;
  name: string;
  color: string;
};

export function guestFromId(id: string): GuestUser {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }

  const adjective = ADJECTIVES[hash % ADJECTIVES.length];
  const animal = ANIMALS[(hash >> 4) % ANIMALS.length];
  const color = COLORS[(hash >> 8) % COLORS.length];

  return { id, name: `${adjective} ${animal}`, color };
}
