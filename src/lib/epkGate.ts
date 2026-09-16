/** SHA-256 of the lowercase shared press-kit password. */
const EPK_PASSWORD_SHA256 =
  "6204b7390cbccd332d28455323a0e7a79387648f168e48786977640167ea6cf8";

const STORAGE_KEY = "hh-epk-unlocked";

export function isEpkUnlocked() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberUnlock() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* private browsing */
  }
}

async function sha256Hex(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function unlockEpk(password: string) {
  const hex = await sha256Hex(password.trim().toLowerCase());
  if (hex !== EPK_PASSWORD_SHA256) return false;
  rememberUnlock();
  return true;
}
