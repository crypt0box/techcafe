{
  const value1: string | number = 0;
  const value2: string | number = "foo";
  const value3: string | number = "";

  // 型に名前をつけられる
  type StringOrNumber = string | number;
  const value4: StringOrNumber = 100;
  const value5: StringOrNumber = "bar";

  type Person = {
    name: string;
    age: number;
  };

  const person: Person = {
    name: "foo",
    age: 20,
  };
}
