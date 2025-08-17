import type { Config } from "@react-router/dev/config";

function getRandomName() {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
    "Frank",
    "Grace",
    "Hannah",
    "Ivan",
    "Julia",
    "Kevin",
    "Laura",
    "Mike",
    "Nina",
    "Oscar",
    "Paul",
    "Quinn",
    "Rachel",
    "Sam",
    "Tina",
    "Uma",
    "Victor",
    "Wendy",
    "Xander",
    "Yara",
    "Zane",
  ];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomAge() {
  return Math.floor(Math.random() * 60) + 18; // Ages between 18 and 77
}

const users = Array.from({ length: 150 }, (_, i) => ({
  id: `user${i + 1}`,
  name: getRandomName(),
  age: getRandomAge(),
}));

// Genera rutas dinámicas para pruebas
const testUserRoutes = users.map(
  (user) => `auth/testing-args/${user.id}/${user.name}/${user.age}`
);

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  async prerender() {
    return [
      "/auth/login",
      "/auth/register",
      "/auth/testing",
      //"/auth/testing-args/:id/:name/:age",
      "/products/iphone-14",
      "/products/samsung-galaxy-s21",
      "/products/google-pixel-6",

      "/products/oneplus-9",

      // Rutas de prueba
      ...testUserRoutes,
    ];
  },
} satisfies Config;
