export const maskInput = (input: string) => {
  const clearInput = input.replaceAll("-", "").replaceAll(" ", "");
  const result = clearInput.match(/.{1,3}/g) || [];
  return result.join("-").toString();
};
