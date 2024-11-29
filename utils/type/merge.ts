/**
 * type 2개를 병합하기 위한 merge type
 * 키가 중복되는 경우는 후승
 */
export type Merge<B extends object, S extends object> = S & Omit<B, keyof S>;