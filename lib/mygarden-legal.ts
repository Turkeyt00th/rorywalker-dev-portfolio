/**
 * The legal entity behind MyGarden, shared by the privacy policy and the
 * terms. Keep these in step with App Store Connect's seller details.
 */
export const mygardenLegal = {
  app: "MyGarden",
  company: "Walker Software Solutions Ltd",
  companyNumber: "17239213",
  address: "14 Heronden View, Eastry, Kent, CT13 0EZ, United Kingdom",
  email: "support@rorywalker.dev",
  // Bump these whenever the wording changes, and tell users in the app when
  // the change is material.
  privacyUpdated: "25 September 2026",
  termsUpdated: "25 September 2026",
  privacyPath: "/mygarden/privacy",
  termsPath: "/mygarden/terms",
} as const;
