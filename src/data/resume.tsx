import { Icons } from "@/components/icons";
import { HomeIcon, SendIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Tailwind } from "@/components/ui/svgs/tailwind";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Всё содержимое сайта лежит здесь.
// Поле `mock: true` помечает выдуманные данные — на сайте у них плашка «пример».
export const DATA = {
  name: "Байр Авеев",
  initials: "БА",
  url: "https://bair-a.github.io/my-portfolio",
  location: "Россия",
  description: "Фронтенд-разработчик. Делаю интерфейсы на React и Next.js.",
  summary:
    "Полтора года работал фронтенд-разработчиком в сервисе доставки еды [Foodster](https://foodster.pro/): делал админ-панель и PWA. Через месяц после запуска PWA заказы через сервис выросли на **17%**. Люблю решать реальные задачи пользователей: если чего-то не знаю — разберусь, если знаю — с радостью помогу команде. Сейчас **открыт к новым предложениям**.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/60327040?s=400&u=70da1ce184957b372fedfe57b4550a6651a0b906&v=4",
  logoUrl: `${BASE_PATH}/logo.png`,

  // Цифры относятся только к работе в Foodster — это подписано над блоком
  statsTitle: "Foodster · сен 2023 — мар 2025",
  stats: [
    { value: "1,5 года", label: "фронтенд-разработчиком" },
    { value: "+17%", label: "заказов после запуска PWA" },
    { value: "2 продукта", label: "админ-панель и PWA" },
  ],

  skills: [
    { name: "JavaScript" },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Ant Design" },
    { name: "SCSS-модули" },
    { name: "Refine" },
    { name: "Feature-Sliced Design" },
    { name: "PWA" },
    { name: "Яндекс.Карты API" },
  ],

  navbar: [{ href: "#hero", icon: HomeIcon, label: "Главная" }],

  contact: {
    email: "aveevb123@gmail.com",
    telegram: "https://t.me/aveev_bo",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bair-a",
        icon: Icons.github,
        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/aveev_bo",
        icon: SendIcon,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:aveevb123@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Foodster",
      href: "https://foodster.pro/",
      location: "Удалённо",
      title: "Фронтенд-разработчик",
      logoUrl: "",
      start: "Сен 2023",
      end: "Мар 2025",
      mock: false,
      intro:
        "Разработал админ-панель для ресторанов и клиентское PWA для заказа еды. Среди задач:",
      description: [
        "определение адреса в PWA: поиск с подсказками через Geosuggest, выбор точки на Яндекс.Карте и геокодирование координат в адрес;",
        "зоны доставки: полигоны на Яндекс.Карте (react-yandex-maps), по которым клиенту показываются рестораны, доставляющие по его адресу;",
        "управление ресторанами: расписания и часовые пояса;",
        "управление блюдами и заказами: подтверждение, отмена, отслеживание;",
        "система аккаунтов администраторов.",
      ],
      result: "Через месяц после запуска PWA заказы через сервис выросли на 17%.",
    },
    {
      company: "Фриланс",
      href: "#",
      location: "Удалённо",
      title: "Фронтенд-разработчик",
      logoUrl: "",
      start: "2022",
      end: "2023",
      mock: true,
      intro: "",
      description: [
        "Вёрстка лендингов и небольших SPA на React для малого бизнеса.",
        "Настройка адаптивной вёрстки и деплоя на Vercel.",
      ],
      result: "",
    },
  ],

  projects: [
    {
      title: "Foodster — админ-панель",
      href: "https://foodster.pro/",
      dates: "2023 — 2025",
      active: false,
      mock: false,
      description:
        "Панель для ресторанов и администраторов сервиса доставки: заказы, меню, расписания, часовые пояса и зоны доставки на карте.",
      technologies: ["Next.js", "TypeScript", "Refine", "Ant Design", "Яндекс.Карты", "FSD"],
      links: [{ type: "Сайт", href: "https://foodster.pro/", icon: <Icons.globe className="size-3" /> }],
      image: "",
      video: "",
    },
    {
      title: "Foodster — PWA",
      href: "https://foodster.pro/",
      dates: "2024 — 2025",
      active: false,
      mock: false,
      description:
        "Клиентское приложение для заказа еды с выбором адреса на карте. **+17% заказов** через месяц после запуска.",
      technologies: ["React", "Next.js", "PWA", "Tailwind CSS", "Geosuggest"],
      links: [{ type: "Сайт", href: "https://foodster.pro/", icon: <Icons.globe className="size-3" /> }],
      image: "",
      video: "",
    },
    {
      // Заготовка: впиши описание, стек, даты и ссылки, затем убери mock: true
      title: "Book-swap",
      href: "#",
      dates: "2025",
      active: false,
      mock: true,
      description: "Сервис для обмена книгами между читателями.",
      technologies: ["React", "Next.js", "TypeScript"],
      links: [{ type: "Код", href: "#", icon: <Icons.github className="size-3" /> }],
      image: "",
      video: "",
    },
  ],

  journey: [
    {
      title: "Первые шаги в JavaScript",
      dates: "2021",
      location: "Самообучение",
      description: "Курсы, документация MDN и первые вёрстки по макетам.",
      mock: true,
      links: [],
    },
    {
      title: "Первые pet-проекты на React",
      dates: "2022",
      location: "GitHub",
      description: "Перешёл на React и TypeScript, начал собирать небольшие приложения.",
      mock: true,
      links: [],
    },
    {
      title: "Foodster",
      dates: "Сентябрь 2023",
      location: "Фронтенд-разработчик",
      description: "Админ-панель и PWA для сервиса доставки еды.",
      mock: false,
      links: [{ title: "foodster.pro", href: "https://foodster.pro/", icon: <Icons.globe className="size-3" /> }],
    },
    {
      title: "Открыт к новым предложениям",
      dates: "Сейчас",
      location: "React · Next.js · TypeScript",
      description: "Ищу команду, где можно делать продукт для реальных пользователей.",
      mock: false,
      links: [],
    },
  ],
} as const;
