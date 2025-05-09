# RefuerzoFront
## Andrés Jacobo Sepúlveda

## *Requisitos*
Para ejecutar el proyecto, necesitamos:

- Node.js (versión 18 o superior).
- npm (instalado con Node.js).
- Vite (para el entorno de desarrollo).
- React.js (para la interfaz de usuario).
- Un IDE como Visual Studio Code, IntelliJ IDEA o WebStorm.

## *Configuración*
1. Clonar el repositorio mediante la terminal si se tiene instalado github o desde git bash a cualquier carpeta existente en su portatil:
```text
git clone https://github.com/tuusuario/RefuerzoFront.git
cd RefuerzoFront
```
2. Abrimos desde el editor de codigo que queramos en este caso Visual Studio Code y instalamos las dependecias necesarias desde el terminal del mismo dentro del proyecto:
```text
npm create vite@latest nameproyecto --template react
npm install
npm install react-router-dom
npm install chartjs
npm install react-chartjs-2 chart.js
npm install axios
```
3. Ejecutamos la aplicacion en modo desarrollo mediante lo siguiente:
```text
npm run dev
```

## *Estructura del proyecto*
El proyecto esta estructurado de esta manera:
```text
.
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── context/
│   │   └── CartContext.tsx
│   ├── data/
│   │   └── furnitureCatalog.tsx
│   ├── pages/
│   │   ├── CartPage/
│   │   │   ├── CartPage.module.css
│   │   │   └── CartPage.tsx
│   │   └── HomePage/
│   │       ├── HomePage.module.css
│   │       └── HomePage.tsx
│   ├── services/
│   │   └── ordersService.ts
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── types/
│   │   ├── furniture.ts
│   │   └── order.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## *Ejecución:*
Ejecutamos la aplicacion en modo desarrollo mediante lo siguiente:
```text
npm run dev
```

## *Fotos de la app*

![image](https://github.com/user-attachments/assets/9000fde5-a218-4d1f-80f6-b017df8eaf90)

![image](https://github.com/user-attachments/assets/bf35b3b5-9637-47d3-bd39-8123c9d3e6b5)

![image](https://github.com/user-attachments/assets/67a78886-fd53-4582-85c0-d3b43b8168ac)

![image](https://github.com/user-attachments/assets/b9aaacd5-f753-4b25-a63c-435112e69a92)

![image](https://github.com/user-attachments/assets/fd3a6d95-4b1b-4501-ba04-c4cff03f5fe9)

![image](https://github.com/user-attachments/assets/078d5e85-3bfb-4c48-bbd3-23783e5bdd3c)

![image](https://github.com/user-attachments/assets/c53f3a82-436b-486f-b7da-da8d1739944c)

![image](https://github.com/user-attachments/assets/ec9fa43e-df4d-49a2-8072-688275bc3cc9)




