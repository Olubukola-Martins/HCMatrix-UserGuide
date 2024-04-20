import { document } from "./document";
import { healthAccess } from "./healthAccess";
import { leave } from "./leave";
import { loan } from "./loan";
import { onboarding } from "./onboarding";
import { payslip } from "./payslip";
import { requisition } from "./requisition";
import { vehicleBooking } from "./vehicleBooking";
import { conferenceRoom } from "./conferenceRoom";

export const selfService = [
  ...document,
  ...healthAccess,
  ...leave,
  ...loan,
  ...onboarding,
  ...payslip,
  ...requisition,
  ...vehicleBooking,
  ...conferenceRoom,
];
