import type { FC } from "react";

type PropsWithClassName<T = object> = T & { className?: string };
type CompoundComponent<K, T = object> = FC<T> & K;

export type { PropsWithClassName, CompoundComponent };
