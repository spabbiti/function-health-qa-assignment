import { faker } from "@faker-js/faker";

function getRandomPhoneNumber() {
  const areaCode = faker.number.int({ min: 200, max: 999 });
  const lineNumber = faker.number
    .int({ min: 1, max: 99 })
    .toString()
    .padStart(4, "0");
  return `${areaCode}-555-${lineNumber}`; //555-01XX phone numbers are never valid
}

export function getUserData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName }).toLowerCase();
  const phoneNumber = getRandomPhoneNumber();
  const password = faker.internet.password();

  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
  };
}
