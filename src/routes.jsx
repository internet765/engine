import {
  TreeIcon,
  ImageIcon,
  SoundIcon,
  InventoryIcon,
  BugIcon,
  MoneyIcon,
  SettingsIcon,
} from "./img/icons";

export const NAVBAR_ROUTS = [
  {
    id: 1,
    path: "books",
    name: "Книги",
    disabled: false,
    permission: ["admin", "editor", "author"],
  },
  {
    id: 2,
    path: "users",
    name: "Пользователи",
    disabled: false,
    permission: ["admin"],
  },
  {
    id: 3,
    path: "profile",
    name: "Личный кабинет",
    disabled: false,
    permission: ["admin", "editor", "author"],
  },
  {
    id: 4,
    path: "ar",
    name: "AR",
    disabled: true,
    permission: ["admin", "editor", "author"],
  }
];

export const SIDEBAR_ROUTS = [
  {
    id: 1,
    path: "",
    name: "Сюжет",
    icon: <TreeIcon />,
    disabled: false,
    permission: ["admin", "editor", "author"],
  },
  {
    id: 2,
    path: "images",
    name: "Изображения",
    icon: <ImageIcon />,
    disabled: false,
    permission: ["admin", "editor", "author"],
  },
  {
    id: 3,
    path: "sounds",
    name: "Звуки",
    icon: <SoundIcon />,
    disabled: false,
    permission: ["admin", "editor", "author"],
  },
  {
    id: 4,
    path: "inventory",
    name: "Инвентарь",
    icon: <InventoryIcon />,
    disabled: true,
    permission: ["admin", "editor", "author"],
  },
  {
    id: 5,
    path: "testing",
    name: "Тестирование",
    icon: <BugIcon />,
    disabled: true,
    permission: ["admin", "editor"],
  },
  {
    id: 6,
    path: "monetization",
    name: "Монетизация",
    icon: <MoneyIcon />,
    disabled: true,
    permission: ["admin"],
  },
  {
    id: 7,
    path: "settings",
    name: "Настройки",
    icon: <SettingsIcon />,
    disabled: false,
    permission: ["admin"],
  },
];
