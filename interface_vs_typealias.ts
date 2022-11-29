// サバイバルTypeScriptの例をお借りしています
// 参考: https://typescriptbook.jp/reference/object-oriented/interface/interface-vs-type-alias
// 継承
{
  interface Animal {
    name: string;
  }
  interface Creature {
    dna: string;
  }
  interface Dog extends Animal, Creature {
    dogType: string;
  }
  const dog: Dog = {
    name: "wanko",
    dna: "okami",
    dogType: "siberian husky",
  };
}
{
  type Animal = {
    name: string;
  };
  type Creature = {
    dna: string;
  };
  type Dog = Animal &
    Creature & {
      dogType: string;
    };
  const dog: Dog = {
    name: "wanko",
    dna: "okami",
    dogType: "siberian husky",
  };
}

// 継承による上書き
{
  // OK
  interface Animal {
    name: any;
    price: {
      yen: number;
    };
    legCount: number;
  }

  interface Dog extends Animal {
    name: string;
    price: {
      yen: number;
      dollar: number;
    };
  }

  // 最終的なDogの定義
  interface ResultDog {
    name: string;
    price: {
      yen: number;
      dollar: number;
    };
    legCount: number;
  }

  interface A {
    numberField: number;
    price: {
      yen: number;
      dollar: number;
    };
  }

  interface B extends A {
    numberField: string;
    price: {
      yen: number;
      euro: number;
    };
  }
}
{
  type Animal = {
    name: number;
    price: {
      yen: number;
      dollar: number;
    };
  };

  type Dog = Animal & {
    name: string;
    price: {
      yen: number;
      euro: number;
    };
  };

  // 最終的なDogの定義
  type ResultDog = {
    name: never; // 交差型を作れない場合はコンパイルエラーではなくnever型になる
    price: {
      yen: number;
      dollar: number;
      euro: number;
    };
  };
}

// 同名のものを宣言
{
  interface Chat {
    roomName: string;
  }
  interface Chat {
    count: number;
  }
  const chat: Chat = {
    roomName: "foo",
    count: 1,
  };
}
{
  type Chat = {
    roomName: string;
  };
  type Chat = {
    count: number;
  };
}

// Mapped Types
{
  type SystemSupportLanguage = "en" | "fr" | "it" | "es";
  type Butterfly = {
    [key in SystemSupportLanguage]: string;
  };
}
{
  type SystemSupportLanguage = "en" | "fr" | "it" | "es";

  interface Butterfly {
    [key in SystemSupportLanguage]: string;
  }
}

// VSCodeでホバーしたとき
{
  interface Product1 {
    name: string;
    price: number;
  }
  const product1: Product1 = {
    name: "foo",
    price: 1000,
  };

  type Product2 = {
    name: string;
    price: number;
  };
  const product2: Product2 = {
    name: "foo",
    price: 1000,
  };
}
