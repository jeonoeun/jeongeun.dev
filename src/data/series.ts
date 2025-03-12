import seriesImg from "../../public/images/series.jpg";
import { StaticImageData } from "next/image";

export interface Series {
  id: number;
  title: string;
  coverImage: StaticImageData;
  description: string;
  slug: string;
}

export const series: Series[] = [
  {
    id: 1,
    title: "달팽이 회고록",
    coverImage: seriesImg,
    description: "느리지만 꾸준히 걸어가는 길의 한 모퉁이를 회고하였습니다.",
    slug: "snail-retrospective",
  },
  {
    id: 2,
    title: "개발일지 & 삽질로그",
    coverImage: seriesImg,
    description:
      "개발 과정에서 겪은 문제 해결 및 삽질 경험을 기록한 시리즈입니다.",
    slug: "dev-log",
  },
  {
    id: 3,
    title: "Deep Dive!",
    coverImage: seriesImg,
    description:
      "프론트엔드 기술 스택, 문법, 작동 원리를 깊이 있게 탐구하고 정리한 시리즈입니다.",
    slug: "deep-dive",
  },
  {
    id: 4,
    title: "Algorithms",
    coverImage: seriesImg,
    description: "알고리즘 문제 풀이 과정에 대해 작성한 시리즈입니다.",
    slug: "algorithms",
  },
];
