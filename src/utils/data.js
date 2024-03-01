import { faker } from "@faker-js/faker"

const getRandomDocument = () =>
  Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 1

export function generateFakeUsers(qty) {
  const rolesQty = 5
  const states = [true, false]
  const users = []

  for (let i = 0; i < qty; i++) {
    const user = {
      name: faker.person.firstName(),
      last_name: faker.person.firstName(),
      document: getRandomDocument(),
      role_id: Math.floor(Math.random() * rolesQty),
      state: states[Math.floor(Math.random() * states.length)],
      phone: faker.phone.number("961-770-7727"),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }

    users.push(user)
  }

  return users
}
