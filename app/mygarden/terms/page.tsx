import type { Metadata } from "next";
import {
  CompanyDetails,
  LegalLink,
  LegalList,
  LegalPage,
  LegalSection,
  SupportEmail,
} from "@/components/legal";
import { mygardenLegal } from "@/lib/mygarden-legal";

export const metadata: Metadata = {
  title: "MyGarden terms of service",
  description:
    "The terms for using the MyGarden app, including subscriptions, AI features and gardening advice.",
  alternates: { canonical: mygardenLegal.termsPath },
};

export default function MyGardenTermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      updated={mygardenLegal.termsUpdated}
      intro={
        <>
          <p>
            These terms are the agreement between you and{" "}
            {mygardenLegal.company} for using MyGarden. By creating an account
            or using the app, you agree to them.
          </p>
          <p>
            We’ve kept them as short and plain as we can. The parts most worth
            reading are section 5 (gardening advice and plant safety) and
            section 9 (subscriptions).
          </p>
        </>
      }
    >
      <LegalSection id="about-us" number={1} title="About us">
        <p>
          MyGarden is made by {mygardenLegal.company} (“we”, “us”).
        </p>
        <CompanyDetails />
        <p>
          How we handle your personal data is covered by our{" "}
          <LegalLink href={mygardenLegal.privacyPath}>privacy policy</LegalLink>
          .
        </p>
      </LegalSection>

      <LegalSection id="who-can-use" number={2} title="Who can use MyGarden">
        <p>
          You must be at least 13 to use MyGarden. If you’re under 18, you need
          a parent or guardian’s permission, and they should read these terms
          with you. MyGarden is for personal, non-commercial use.
        </p>
      </LegalSection>

      <LegalSection id="account" number={3} title="Your account">
        <p>
          You sign in with your email address, Apple or Google. Keep access to
          that account secure, and tell us at <SupportEmail /> if you think
          someone else has used it. Each account is for 1 person.
        </p>
        <p>
          You can delete your account at any time in{" "}
          <strong>Settings</strong>, then <strong>Delete account</strong>.
        </p>
      </LegalSection>

      <LegalSection id="the-app" number={4} title="The app">
        <p>
          MyGarden helps you look after plants: a plant catalogue, care guides,
          reminders, weather-adjusted watering, photo identification and health
          checks, a photo journal, a growing calendar and a wildlife tracker.
          Some features may need a paid subscription in future. We’ll always
          show you clearly which ones before you pay.
        </p>
        <p>
          We’re always improving MyGarden, so features will change. If we
          remove something that’s part of a subscription you’ve paid for, we’ll
          tell you in advance. We try to keep MyGarden running all the time,
          but we can’t promise it will never be interrupted, for example during
          maintenance or if a provider we rely on has an outage.
        </p>
      </LegalSection>

      <LegalSection
        id="gardening-advice"
        number={5}
        title="Gardening advice and plant safety"
      >
        <p>
          Care guides, identifications, diagnoses, reminders and calendars are
          general guidance for home gardeners. Many are written by AI (see
          section 6) and all of them can be wrong or miss something about your
          particular plant, garden or climate. Use your own judgement, and ask
          a qualified professional when it matters.
        </p>
        <p>
          <strong>Never eat, or let a child or pet eat, a plant or fungus
          because of anything MyGarden says.</strong> An identification from a
          photo is a best guess. Toxicity warnings come from the Horticultural
          Trades Association’s <em>Guide to Potentially Harmful Plants</em> and
          only appear for plants listed there. A plant with no warning is not
          necessarily safe. If you think someone has been poisoned, call 999
          or NHS 111, or a vet for an animal.
        </p>
        <p>
          Watering reminders are adjusted using weather forecasts, which can be
          wrong. Check the soil before you rely on a skipped watering.
        </p>
      </LegalSection>

      <LegalSection id="ai" number={6} title="AI features">
        <p>
          MyGarden uses Claude, an AI model made by Anthropic, to identify
          plants and wildlife, read plant labels, diagnose problems and write
          care guides. The app asks your permission before sending any photo to
          Anthropic. AI output can be inaccurate, incomplete or out of date,
          and sounding confident doesn’t make it right. Our{" "}
          <LegalLink href={`${mygardenLegal.privacyPath}#ai`}>
            privacy policy
          </LegalLink>{" "}
          explains what’s sent and how it’s handled.
        </p>
      </LegalSection>

      <LegalSection id="your-content" number={7} title="Your content">
        <p>
          The photos, notes and sightings you add are yours. You give us
          permission to store, copy, resize and process them only as needed to
          run MyGarden for you, including sending photos to our AI provider
          when you use a photo feature. That permission ends when you delete
          the content or your account, apart from backups, which clear within
          30 days.
        </p>
        <p>
          Only upload content you have the right to use. Don’t upload photos
          of other people without their permission, or anything illegal,
          offensive or harmful.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" number={8} title="Acceptable use">
        <p>Please don’t:</p>
        <LegalList>
          <li>break the law, or use MyGarden to harm anyone</li>
          <li>
            try to access other people’s data, or parts of the service you
            aren’t meant to reach
          </li>
          <li>
            copy, scrape or resell the catalogue, care guides or other content
            in bulk
          </li>
          <li>
            overload the service, including by automated requests to its
            identification or search features
          </li>
          <li>
            reverse engineer the app, except where the law allows it
          </li>
        </LegalList>
        <p>
          If you do, we may suspend or close your account. Unless it’s serious
          or urgent, we’ll tell you first and give you the chance to put it
          right.
        </p>
      </LegalSection>

      <LegalSection id="subscriptions" number={9} title="Subscriptions">
        <p>
          MyGarden is free to download. We may offer an optional paid
          subscription with extra features. If you buy one:
        </p>
        <LegalList>
          <li>
            You buy it through the App Store, and Apple charges your Apple ID
            account when you confirm the purchase.
          </li>
          <li>
            It renews automatically at the same price and length unless you
            turn off auto-renew at least 24 hours before the end of the current
            period. Your account is charged for renewal within the 24 hours
            before the period ends.
          </li>
          <li>
            You can manage or cancel it at any time in your Apple ID settings.
            Cancelling stops the next renewal, and you keep access until the end
            of the period you’ve paid for.
          </li>
          <li>
            If we offer a free trial, any unused part of it ends when you buy a
            subscription.
          </li>
          <li>
            Refunds are handled by Apple under its policies. Request one at{" "}
            <LegalLink href="https://reportaproblem.apple.com">
              reportaproblem.apple.com
            </LegalLink>
            .
          </li>
          <li>
            If the price changes, Apple will tell you in advance and, where
            required, ask you to agree before you’re charged the new price.
          </li>
        </LegalList>
        <p>
          Deleting your account doesn’t cancel a subscription. Cancel it in
          your Apple ID settings first.
        </p>
      </LegalSection>

      <LegalSection
        id="third-party"
        number={10}
        title="Our content and other people’s"
      >
        <p>
          The app, its design, code and the care guides we generate belong to
          us or our licensors. We give you a personal, non-transferable licence
          to use MyGarden on devices you own or control, under these terms.
        </p>
        <p>
          Some content comes from others and stays theirs: plant and wildlife
          photos from iNaturalist contributors and Wikimedia Commons, shown
          with their credits and licences; weather data by{" "}
          <LegalLink href="https://open-meteo.com">Open-Meteo.com</LegalLink>{" "}
          under CC BY 4.0; and toxicity information from the Horticultural
          Trades Association. Links to other websites are provided for
          convenience, and we aren’t responsible for their content.
        </p>
      </LegalSection>

      <LegalSection id="ending" number={11} title="Ending this agreement">
        <p>
          You can stop using MyGarden and delete your account whenever you
          like. We can close your account under section 8. If we ever decide
          to shut MyGarden down, we’ll give you at least 30 days’ notice in the
          app so you can save your photos, and explain what happens to any
          subscription.
        </p>
      </LegalSection>

      <LegalSection id="liability" number={12} title="Our responsibility to you">
        <p>
          If you live in the UK, you have legal rights in relation to digital
          content and services that don’t work as described. Nothing in these
          terms affects those rights. Citizens Advice has more information.
        </p>
        <p>
          We’re responsible for loss or damage you suffer that is a
          foreseeable result of us breaking these terms or failing to use
          reasonable care and skill. We aren’t responsible for loss that
          wasn’t foreseeable, or for business losses, since MyGarden is for
          personal use.
        </p>
        <p>
          We aren’t responsible for the health of your plants, crops or
          animals, or for harm caused by acting on general gardening guidance
          without checking it for your situation (see section 5), except where
          that harm results from our negligence.
        </p>
        <p>
          If digital content we supply damages your device or other digital
          content, and that’s because we didn’t use reasonable care and skill,
          we’ll repair the damage or pay you compensation.
        </p>
        <p>
          Nothing in these terms limits our liability for death or personal
          injury caused by our negligence, for fraud, or for anything else that
          the law doesn’t allow us to limit.
        </p>
      </LegalSection>

      <LegalSection id="apple" number={13} title="App Store terms">
        <p>
          If you downloaded MyGarden from Apple’s App Store, these extra terms
          apply:
        </p>
        <LegalList>
          <li>
            These terms are between you and {mygardenLegal.company} only, and
            not with Apple. We, not Apple, are solely responsible for MyGarden
            and its content.
          </li>
          <li>
            Your licence to use MyGarden is limited to Apple-branded products
            you own or control, as permitted by the Usage Rules in Apple’s Media
            Services Terms and Conditions, except that the app may be accessed
            by other accounts associated with you through Family Sharing or
            volume purchasing.
          </li>
          <li>
            We are solely responsible for maintenance and support. Apple has no
            obligation to provide any maintenance or support for MyGarden.
          </li>
          <li>
            If MyGarden fails to conform to any applicable warranty, you can
            tell Apple, and Apple will refund the purchase price (if any) for
            the app. To the maximum extent permitted by law, Apple has no other
            warranty obligation for MyGarden. Any other claims, losses,
            liabilities, damages, costs or expenses caused by a failure to
            conform to a warranty are our responsibility, as set out in these
            terms.
          </li>
          <li>
            We, not Apple, are responsible for addressing any claims by you or
            any third party relating to MyGarden or your use of it, including
            product liability claims, claims that the app fails to meet a legal
            or regulatory requirement, and claims under consumer protection,
            privacy or similar laws.
          </li>
          <li>
            If a third party claims that MyGarden or your use of it infringes
            their intellectual property rights, we, not Apple, are solely
            responsible for the investigation, defence, settlement and
            discharge of that claim.
          </li>
          <li>
            You confirm that you are not located in a country subject to a US
            Government embargo or designated by the US Government as a
            “terrorist supporting” country, and that you are not on any US
            Government list of prohibited or restricted parties.
          </li>
          <li>
            You must comply with any applicable third-party terms when using
            MyGarden, such as your mobile network’s terms.
          </li>
          <li>
            Apple and its subsidiaries are third-party beneficiaries of these
            terms, and once you accept them, Apple has the right to enforce
            them against you as a third-party beneficiary.
          </li>
        </LegalList>
        <p>
          Questions, complaints or claims about MyGarden go to us at the
          address in section 1, or <SupportEmail />.
        </p>
      </LegalSection>

      <LegalSection id="changes" number={14} title="Changes to these terms">
        <p>
          We may update these terms when the app or the law changes, and we’ll
          change the date at the top. If a change is significant, we’ll tell
          you in the app before it takes effect. If you don’t agree to the new
          terms, you can delete your account and cancel any subscription
          before they apply.
        </p>
      </LegalSection>

      <LegalSection id="law" number={15} title="Law and disputes">
        <p>
          These terms are governed by the law of England and Wales, and you
          can bring legal proceedings in the courts of England and Wales. If
          you live in Scotland or Northern Ireland, you can also bring
          proceedings there. If you live elsewhere, you keep any protection
          your local consumer law gives you.
        </p>
        <p>
          If you have a problem, please email <SupportEmail /> first. Most
          things can be sorted out quickly.
        </p>
        <p>
          If a court decides part of these terms can’t be enforced, the rest
          still applies. If we don’t enforce a term straight away, we can still
          enforce it later.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
