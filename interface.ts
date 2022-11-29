/** -- 型定義 -------------------------- */
{
  interface Person {
    name: string;
    age: number;
  }

  const taro = {
    name: "太郎",
    age: 12,
  };

  // interfaceを使うとオブジェクトに型をつけることができる
  const jiro: Person = {
    name: "次郎",
    age: 10,
  };

  // interfaceが無いときはどのように型をつけていた？
  // Classが使える
  class Animal {
    name: string;
    age: number;
  }

  const animal: Animal = {
    name: "foo",
    age: 20,
  };

  // なぜ型付けにClassを使わないのか？
  // https://qiita.com/suin/items/3b58e2151a29db0735b0
  // https://qiita.com/rena_m/items/ba09fcf49e120164e646

  // Classはアプリケーションの機能を成り立たせるために使うもの
  // 型付けはアプリケーションの機能を成り立たせるために必須ではない
  // したがって型付けにClassを使うのはあまり適切ではない

  // →事実Classはコンパイル後には残るがinterfaceは残らない
}
