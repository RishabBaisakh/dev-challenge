import randomstring from "randomstring";

export const getAuthenticationToken = () => randomstring.generate();
