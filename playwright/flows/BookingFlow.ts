import { PlanPage } from "../pages/PlanPage";
import { SchedulePage } from "../pages/SchedulePage";
import { PaymentPage } from "../pages/PaymentPage";
import { BookingDetails } from "../helpers/testData";

export class BookingFlow {
  constructor(
    private planPage: PlanPage,
    private schedulePage: SchedulePage,
    private paymentPage: PaymentPage,
  ) {}

  async completeBooking(booking: BookingDetails): Promise<BookingDetails> {
    await this.planPage.selectPlan(booking.planName);

    await this.schedulePage.confirmLoaded();
    await this.schedulePage.selectAppointment(booking.location);

    await this.paymentPage.confirmLoaded();
    await this.paymentPage.confirmPayment(booking.payment);

    return booking;
  }
}
