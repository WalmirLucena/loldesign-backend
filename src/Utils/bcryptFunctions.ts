import { genSaltSync, hashSync } from "bcryptjs"

export const generateCriptPassword = (password:string): String => {
    const saltRounds = 10;

    const salt = genSaltSync(saltRounds);
    const hash = hashSync(password, salt);

    return hash
}
