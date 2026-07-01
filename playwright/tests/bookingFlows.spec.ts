import { test as base } from "@playwright/test";
import { USER_EMAIL, USER_PASSWORD } from "../helpers/configHelper";
import {
  SignInPage,
  HomePage,
  PlanPage,
  SchedulePage,
  PaymentPage,
  BookingConfirmPage,
  SignUpPage,
} from "../pages";
import { BookingFlow } from "../flows/BookingFlow";
import { bookingData, declinedPaymentBookingData } from "../helpers/testData";

const test = base.extend<{
  signInPage: SignInPage;
  signUpPage: SignUpPage;
  homePage: HomePage;
  planPage: PlanPage;
  schedulePage: SchedulePage;
  paymentPage: PaymentPage;
  bookingConfirmPage: BookingConfirmPage;
  bookingFlow: BookingFlow;
}>({
  signInPage: async ({ page }, use) => {
    const signInPage = new SignInPage(page);
    await signInPage.goto();
    await use(signInPage);
  },
  signUpPage: async ({ page }, use) => {
    const signUpPage = new SignUpPage(page);
    await signUpPage.goto();
    await use(signUpPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  planPage: async ({ page }, use) => {
    const planPage = new PlanPage(page);
    await use(planPage);
  },
  schedulePage: async ({ page }, use) => {
    const schedulePage = new SchedulePage(page);
    await use(schedulePage);
  },
  paymentPage: async ({ page }, use) => {
    const paymentPage = new PaymentPage(page);
    await use(paymentPage);
  },
  bookingConfirmPage: async ({ page }, use) => {
    const bookingConfirmPage = new BookingConfirmPage(page);
    await use(bookingConfirmPage);
  },
  bookingFlow: async ({ planPage, schedulePage, paymentPage }, use) => {
    const bookingFlow = new BookingFlow(planPage, schedulePage, paymentPage);
    await use(bookingFlow);
  },
});

test.describe("Booking Flow Tests", () => {
  test.only("should allow an existing user to sign in and book an appointment", async ({
    signInPage,
    homePage,
    bookingFlow,
    bookingConfirmPage,
  }) => {
    await signInPage.signIn(USER_EMAIL, USER_PASSWORD);
    await homePage.confirmLoaded();
    await homePage.bookAScan();
    const booking = await bookingFlow.completeBooking(bookingData);
    await bookingConfirmPage.confirmLoaded();
    await bookingConfirmPage.confirmBooking(booking.planName, booking.location);
  });

  test("Should allow a new user to sign up and book an appointment", async ({
    signUpPage,
    planPage,
    bookingFlow,
    bookingConfirmPage,
  }) => {
    await signUpPage.signUp();
    await planPage.confirmLoaded();
    await planPage.enterDoB("01-01-1990");
    await planPage.selectGender("Male");
    const booking = await bookingFlow.completeBooking(bookingData);
    await bookingConfirmPage.confirmLoaded();
    await bookingConfirmPage.confirmBooking(booking.planName, booking.location);
  });

  test("should prevent booking when payment fails", async ({
    signInPage,
    homePage,
    planPage,
    bookingFlow,
    paymentPage,
  }) => {
    await signInPage.signIn(USER_EMAIL, USER_PASSWORD);
    await homePage.confirmLoaded();
    await homePage.bookAScan();
    await planPage.confirmLoaded();
    await bookingFlow.completeBooking(declinedPaymentBookingData);
    await paymentPage.confirmPaymentFailed();
  });
});
