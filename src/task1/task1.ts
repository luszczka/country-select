type Items<T = unknown> = keyof T extends never
  ? never
  : {
      [t in keyof T]: T[t] extends string | (() => string) ? T[t] : Items<T[t]>;
    };

const typedFreeze = <T>(object: Items<T>) => {
  return Object.freeze(object);
};

typedFreeze({
  key1: { key2: "example1", key3: { key4: "example2" } },
  key5: () => "example3",
} as const);

// typedFreeze({
//   key1: { key2: "example1", key3: { key4: "example2" } },
//   key5: () => 10,
// } as const);

// typedFreeze({
//   key1: { key2: "example1", key3: { key4: "example2" } },
//   key5: {},
// } as const);

export {};
