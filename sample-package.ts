// Generated by https://quicktype.io

export interface LecturePackaging {
  name: string;
  version: string;
  description: string;
  main: string;
  jgwill: Jgwill;
  urirs: Urirs;
  scripts: Scripts;
  keywords: string[];
  author: string;
  license: string;
}

export interface Jgwill {
  disyn: Disyn;
}

export interface Disyn {
  resources: Resources;
}

export interface Resources {
  why: string;
  datas: Data[];
}

export interface Data {
  title: string;
  url: string;
}

export interface Scripts {
  test: string;
  on: string;
  rn: string;
  db: string;
  sn: string;
  src: string;
  dropbox: string;
  simplenote: string;
  "afelia-rn": string;
  onenote: string;
}

export interface Urirs {
  sn: Sn;
}

export interface Sn {
  publicurl: string;
}
