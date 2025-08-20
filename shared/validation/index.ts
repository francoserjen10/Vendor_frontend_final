export type Validator = (value: string) => string | null;

export const required = (msg: string): Validator => (v) =>
    v?.trim() ? null : msg;

export const pattern = (re: RegExp, msg: string): Validator => (v) =>
  re.test(String(v)) ? null : msg;

export const minLen = (n: number, msg: string): Validator => (v) =>
    (v ?? '').length >= n ? null : msg;

export const run = (value: string, validators: Validator[]): string | null => {
    for (const fn of validators) {
        const err = fn(value);
        if (err) return err;
    }
    return null;
};
