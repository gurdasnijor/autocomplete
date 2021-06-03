interface Base<T> {
  category: T;
  name: string;
}

export interface Source extends Base<"source"> {
  imgUrl: string;
  type: string;
}

export interface Destination extends Base<"destination"> {
  imgUrl: string;
  connectedTo: {
    name: string;
  };
}

export interface Function extends Base<"function"> {
  imgUrl: string;
}

export interface Shortcut extends Base<"shortcut"> {
  path: string;
}

export interface Documentation extends Base<"documentation"> {
  url: string;
}

export interface Catalog extends Base<"catalog"> {
  imgUrl: string;
}
