import type { Metadata } from "next";
import {
  CompanyDetails,
  LegalItems,
  LegalLink,
  LegalList,
  LegalPage,
  LegalSection,
  SupportEmail,
} from "@/components/legal";
import { mygardenLegal } from "@/lib/mygarden-legal";

export const metadata: Metadata = {
  title: "MyGarden privacy policy",
  description:
    "What personal data the MyGarden app collects, why, who processes it, and how to access or delete it.",
  alternates: { canonical: mygardenLegal.privacyPath },
};

export default function MyGardenPrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated={mygardenLegal.privacyUpdated}
      intro={
        <>
          <p>
            MyGarden collects what it needs to look after your plants and
            nothing else. There are no ads, no tracking across other apps or
            websites, and we never sell your data.
          </p>
          <p>
            This policy explains what we collect, why, who helps us process it,
            how long we keep it, and how to get a copy or have it deleted. It
            covers the MyGarden app and this website.
          </p>
        </>
      }
    >
      <LegalSection id="who-we-are" number={1} title="Who we are">
        <p>
          MyGarden is made by {mygardenLegal.company} (“we”, “us”). We’re the
          controller of your personal data under the UK General Data Protection
          Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>
        <CompanyDetails />
        <p>
          Write to <SupportEmail /> about anything in this policy. We reply
          within 1 month.
        </p>
      </LegalSection>

      <LegalSection id="what-we-collect" number={2} title="What we collect">
        <LegalItems
          items={[
            {
              term: "Account details",
              body: (
                <p>
                  Your email address and a user ID. If you sign in with Apple or
                  Google, we get the email address and account identifier that
                  provider shares with us. If you choose Apple’s “Hide My
                  Email”, we only ever see the relay address.
                </p>
              ),
            },
            {
              term: "Your garden",
              body: (
                <p>
                  Your hardiness zone, the way your garden faces, how shady it
                  is, the habitat features you tick off (a pond or a log pile,
                  for example), and your answers to the welcome quiz about what
                  you like to grow.
                </p>
              ),
            },
            {
              term: "Location",
              body: (
                <p>
                  If you allow it, we save your device’s location as latitude
                  and longitude, along with your time zone. We use it to work
                  out your hardiness zone, local frost dates, the sun’s path
                  over your garden and the weather forecast that adjusts your
                  watering reminders. We ask for location once, while you’re
                  using the app, and never track it in the background. You can
                  type your zone in yourself instead.
                </p>
              ),
            },
            {
              term: "Plants, reminders and notes",
              body: (
                <p>
                  The plants you add, their nicknames, notes and whether they
                  live indoors or out, your care reminders and when you
                  completed them, and your notification preferences.
                </p>
              ),
            },
            {
              term: "Photos you save",
              body: (
                <p>
                  Photo journal pictures of your plants, and photos you attach
                  to wildlife sightings. We store these privately so only your
                  account can see them.
                </p>
              ),
            },
            {
              term: "Photos you send for identification or diagnosis",
              body: (
                <p>
                  When you identify a plant or an animal, read a plant label, or
                  ask for a health check, the photo is sent to our AI provider
                  for analysis (see section 4). We don’t keep these photos.
                  We keep the result: the plant or animal it matched and, for
                  health checks, the diagnosis, so you can see a plant’s history.
                </p>
              ),
            },
            {
              term: "Wildlife sightings",
              body: (
                <p>
                  What you spotted, when, how many, and any note or photo you
                  add.
                </p>
              ),
            },
            {
              term: "Identification feedback",
              body: (
                <p>
                  When you tell us an identification was wrong, we record the
                  match you rejected, your answers to the follow-up questions
                  and the plant you picked instead. We use this to make
                  identification more accurate.
                </p>
              ),
            },
            {
              term: "Notifications",
              body: (
                <p>
                  A push token for your device, so we can send your reminders.
                  If you turn notifications off, we can’t reach your device.
                </p>
              ),
            },
            {
              term: "Purchases",
              body: (
                <p>
                  If you buy a subscription, Apple handles the payment. We
                  receive your subscription status (which plan, whether it’s
                  active and when it renews or expires). We never see your card
                  or bank details.
                </p>
              ),
            },
            {
              term: "Technical data",
              body: (
                <p>
                  The app version you last opened, and standard server logs (IP
                  address, time and type of request) kept by our hosting
                  provider for security and fault-finding.
                </p>
              ),
            },
          ]}
        />
        <p>
          We don’t use advertising or analytics tools, and we don’t collect your
          contacts, health data, browsing history or anything from other apps.
        </p>
      </LegalSection>

      <LegalSection id="why" number={3} title="Why we use it">
        <p>
          UK GDPR asks us to name a lawful basis for each use of your data.
          Ours are:
        </p>
        <LegalList>
          <li>
            <strong>To provide the app you signed up for</strong> (contract):
            your account, garden, plants, reminders, photos, sightings,
            weather-adjusted watering, notifications and subscriptions.
          </li>
          <li>
            <strong>With your permission</strong> (consent): using your
            device’s location and camera, sending you push notifications, and
            sending your photos to our AI provider. You can withdraw any of
            these at any time in the app or in your device’s settings.
          </li>
          <li>
            <strong>To run and improve the service</strong> (legitimate
            interests): keeping it secure, fixing faults, preventing abuse, and
            using identification feedback to make matches more accurate. We
            only do this in ways you’d reasonably expect, and you can object
            (see section 8).
          </li>
          <li>
            <strong>To meet legal obligations</strong>: for example keeping
            records we’re required to keep, or responding to a lawful request.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection id="ai" number={4} title="AI features">
        <p>
          MyGarden uses Claude, an AI model made by Anthropic, PBC, to identify
          plants and wildlife from photos, read plant labels, diagnose plant
          problems and write care guides. Before you use a photo feature for
          the first time, the app asks your permission to send photos to
          Anthropic. If you say no, the rest of the app still works.
        </p>
        <p>
          When you use a photo feature, we send Anthropic the photo and, for a
          health check, the plant’s species and where it grows (indoors or
          out, and how much shade it gets). We don’t send your name, email
          address or location.
        </p>
        <p>
          Anthropic processes this for us as a service provider under its
          commercial terms. It doesn’t use the data to train its models, and
          it deletes it after a limited retention period.
        </p>
        <p>
          AI can get things wrong. Treat identifications, diagnoses and care
          guides as a helpful starting point, and see our{" "}
          <LegalLink href={mygardenLegal.termsPath}>terms of service</LegalLink>{" "}
          for more on relying on them.
        </p>
      </LegalSection>

      <LegalSection id="sharing" number={5} title="Who we share it with">
        <p>
          We use a small number of providers to run MyGarden. Supabase,
          Anthropic, Expo and RevenueCat process data only on our instructions,
          under data processing agreements. Apple and Google handle sign-in and
          payments under their own privacy policies. Open-Meteo, iNaturalist
          and Wikimedia supply content and receive only what’s described below.
        </p>
        <LegalItems
          items={[
            {
              term: "Supabase",
              body: (
                <p>
                  Hosts our database, sign-in, photo storage and server
                  functions. Your data is stored in the EU (Ireland).
                </p>
              ),
            },
            {
              term: "Anthropic",
              body: (
                <p>
                  Analyses photos and writes care guides, as described in
                  section 4. Based in the US.
                </p>
              ),
            },
            {
              term: "Expo (650 Industries)",
              body: (
                <p>
                  Delivers push notifications to Apple’s notification service.
                  Receives your push token and the text of the notification.
                  Based in the US.
                </p>
              ),
            },
            {
              term: "RevenueCat",
              body: (
                <p>
                  Manages subscriptions. Receives your MyGarden user ID and
                  purchase information from Apple. Based in the US.
                </p>
              ),
            },
            {
              term: "Apple and Google",
              body: (
                <p>
                  Sign in with Apple and Sign in with Google, if you use them.
                  Apple also delivers notifications and processes App Store
                  payments under its own privacy policy.
                </p>
              ),
            },
            {
              term: "Open-Meteo",
              body: (
                <p>
                  Supplies weather forecasts and climate data. Receives your
                  garden’s coordinates, with no name, email or account ID
                  attached.
                </p>
              ),
            },
            {
              term: "iNaturalist and Wikimedia",
              body: (
                <p>
                  Supply plant and wildlife photos shown in the catalogue. Your
                  device loads these images directly, so those sites see your
                  IP address, as with any web image.
                </p>
              ),
            },
          ]}
        />
        <p>
          We may also disclose data if the law requires it, to protect
          someone’s safety, or to a buyer if the business is ever sold, in
          which case this policy would continue to apply to your data. We
          never sell your personal data or share it for advertising.
        </p>
      </LegalSection>

      <LegalSection id="transfers" number={6} title="International transfers">
        <p>
          Some of our providers are based in the US. When your data leaves the
          UK, we protect it with a recognised safeguard: UK adequacy
          regulations (which cover the EU), the UK Extension to the EU-US Data
          Privacy Framework where the provider is certified, or the UK
          International Data Transfer Addendum to the EU standard contractual
          clauses. Write to us for a copy of the relevant safeguard.
        </p>
      </LegalSection>

      <LegalSection id="retention" number={7} title="How long we keep it">
        <LegalList>
          <li>
            <strong>Your account and everything in it</strong> (garden,
            plants, reminders, photos, sightings, diagnoses and identification
            feedback): until you delete it, or delete your account.
          </li>
          <li>
            <strong>Photos sent for identification or diagnosis</strong>: we
            don’t store them. Anthropic deletes them after its retention period.
          </li>
          <li>
            <strong>Backups</strong>: deleted data can stay in encrypted
            backups for up to 30 days before it’s overwritten.
          </li>
          <li>
            <strong>Server logs</strong>: kept by our hosting provider for a
            short period, no more than 90 days.
          </li>
        </LegalList>
        <p>
          Apple keeps its own records of App Store purchases, under Apple’s
          privacy policy.
        </p>
      </LegalSection>

      <LegalSection id="rights" number={8} title="Your rights">
        <p>Under UK GDPR you have the right to:</p>
        <LegalList>
          <li>get a copy of the personal data we hold about you</li>
          <li>have inaccurate data corrected</li>
          <li>have your data deleted</li>
          <li>restrict or object to how we use it</li>
          <li>
            receive your data in a machine-readable format, or have it sent to
            another provider
          </li>
          <li>withdraw your consent at any time</li>
        </LegalList>
        <p>
          Email <SupportEmail /> from the address on your account to use any of
          these. We’ll respond within 1 month, and it’s free.
        </p>
        <p>
          If you’re unhappy with how we’ve handled your data, please tell us
          first. You also have the right to complain to the Information
          Commissioner’s Office at{" "}
          <LegalLink href="https://ico.org.uk/make-a-complaint/">
            ico.org.uk
          </LegalLink>{" "}
          or on 0303 123 1113. If you live in the EU, you can complain to your
          local data protection authority.
        </p>
      </LegalSection>

      <LegalSection id="delete" number={9} title="Deleting your account">
        <p>
          You can delete your account in the app at any time: go to{" "}
          <strong>Settings</strong>, then <strong>Delete account</strong>. This
          permanently removes your account, garden, plants, reminders, photos,
          sightings and diagnoses straight away, apart from backups, which
          clear within 30 days.
        </p>
        <p>
          If you can’t get into the app, email <SupportEmail /> from the
          address on your account and we’ll delete it for you.
        </p>
        <p>
          Deleting your account doesn’t cancel an App Store subscription.
          Cancel it in your Apple ID settings first so you aren’t charged again.
        </p>
      </LegalSection>

      <LegalSection id="permissions" number={10} title="Device permissions">
        <p>
          MyGarden asks for these permissions only when you use the feature
          that needs them. Everything else works if you say no, and you can
          change your mind in your device’s settings.
        </p>
        <LegalList>
          <li>
            <strong>Location</strong>: hardiness zone, frost dates, sun path
            and local weather.
          </li>
          <li>
            <strong>Camera and photo library</strong>: journal photos,
            wildlife photos, identification and health checks.
          </li>
          <li>
            <strong>Notifications</strong>: care reminders and your weekend
            digest.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection id="children" number={11} title="Children">
        <p>
          MyGarden is not for children under 13, and we don’t knowingly collect
          data from them. If you think a child under 13 has created an
          account, email <SupportEmail /> and we’ll delete it.
        </p>
      </LegalSection>

      <LegalSection id="security" number={12} title="Security">
        <p>
          Data is encrypted in transit and at rest. Every table and photo store
          is locked so an account can only read its own data, and photos are
          kept in private storage. Only the people who run MyGarden can access
          the systems behind it, and only when they need to. No system is
          perfectly secure, but if a breach puts your data at risk we’ll tell
          you and the ICO as the law requires.
        </p>
      </LegalSection>

      <LegalSection id="changes" number={13} title="Changes to this policy">
        <p>
          We’ll update this page when the app or the law changes, and change
          the date at the top. If a change affects how we use your data in a
          way you wouldn’t expect, we’ll tell you in the app before it takes
          effect.
        </p>
      </LegalSection>

      <LegalSection id="contact" number={14} title="Contact">
        <CompanyDetails />
      </LegalSection>
    </LegalPage>
  );
}
