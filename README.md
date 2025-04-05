# Manager-Portal

## Live Demo

🔗 [https://manager-portal.netlify.app](https://manager-portal.netlify.app)

## How to start dev mode

      yarn
      yarn run dev

## How to buil app

    yarn run build

## Technologies

<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/><img src="https://github.com/devicons/devicon/blob/master/icons/eslint/eslint-original.svg" title="Eslint" alt="Eslint" width="40" height="40"/><img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>

## Libraries

-   jwt-decode
-   react-date-range
-   react-hook-form
-   react-helmet
-   dayjs
-   axios
-   @chakra-ui/react

## File Structure

```
├── public
│   ├── _redirects
│   └── data/
│       └── orders.json                  # Мок-данные заказов
├── src
│   ├── assets                            # Статические файлы
│   │   ├── fonts
│   │   └── images
│   ├── components                        # Общие компоненты
│   │   └── layout                        # Header, Sidebar, SidebarMenu и т.д.
│   │   └── shared                        # Переиспользуемые элементы
│   │       └── UI                        # Кнопки, инпуты, лоадеры и т.п.
│   ├── pages
│   │   ├── 404.tsx
│   │   ├── Main.tsx                      # Главная точка для main-страницы
│   │   └── main
│   │       └── components
│   │           └── pagesTabs             # Контент вкладок (shop, bills, и т.д.)
│   │               ├── shop
│   │               ├── bills
│   │               ├── credit
│   │               ├── deposit
│   │               ├── installment
│   │               └── messages
│   ├── utils
│   │   ├── constants                     # Статические значения
│   │   ├── hooks                         # Кастомные хуки (например, useURLParameters)
│   │   ├── providers                     # React Context, TabContext и другие
│   │   ├── services                      # Axios, useApi и другие запросы
│   │   ├── types                         # Все типы проекта
│   │
│   ├── index.css                         # Глобальные стили
│   ├── App.tsx                           # Корневой компонент
│   └── main.tsx                          # Точка входа в приложение
├── tests                                 # Тесты, если будут
├── vite.config.ts                        # Конфиг Vite
└── README.md

```
