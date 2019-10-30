export function validatePhone(phone: string): boolean {
  return /^1(\d{10})$/.test(phone);
}

export function validatePassword(password: string): boolean {
  return /\w{6,}/.test(password);
}

export function validateSamePassword(
  password: string,
  passwordAn: string
): boolean {
  return password === passwordAn;
}
