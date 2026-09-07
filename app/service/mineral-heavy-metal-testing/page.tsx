import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  AppointmentSteps,
  BeyondScan,
  CellCards,
  HowItWorks,
  SplitApproach,
  WhatWeTest,
  WhoItsFor,
} from "@/components/mineral/sections";
import { Faqs } from "@/components/mineral/faq";
import { VipBand } from "@/components/vip-band";
import { ClosingCta } from "@/components/closing-cta";
import {
  mineralAppointment,
  mineralApproach,
  mineralBeyond,
  mineralCells,
  mineralFaqs,
  mineralHero,
  mineralHow,
  mineralPanel,
  mineralWhoFor,
} from "@/lib/mineral-content";

export const metadata: Metadata = {
  title: "Mineral & Heavy Metal Testing",
  description:
    "A quick, painless, non-invasive scan of your palm that reads the minerals your cells have taken up and the heavy metals they have stored — with initial results available immediately.",
  alternates: { canonical: "/service/mineral-heavy-metal-testing/" },
};

/**
 * "Mineral & Heavy Metal Testing" — Figma 2417:893.
 *
 * Built band by band from the frame rather than through ServicePage: the five
 * service pages share one shape and this one does not, so it opens and closes
 * on the shared components and carries its own middle.
 */
export default function MineralTestingPage() {
  return (
    <>
      <PageHero
        eyebrow={mineralHero.eyebrow}
        title={mineralHero.title}
        body={mineralHero.body}
        cta={mineralHero.cta}
        image={mineralHero.image}
      />

      <SplitApproach
        eyebrow={mineralApproach.eyebrow}
        title={mineralApproach.title}
        standfirst={mineralApproach.standfirst}
        paragraphs={mineralApproach.paragraphs}
        cta={mineralApproach.cta}
      />

      <CellCards
        eyebrow={mineralCells.eyebrow}
        title={mineralCells.title}
        standfirst={mineralCells.standfirst}
        cards={mineralCells.cards}
        caption={mineralCells.caption}
        cta={mineralCells.cta}
      />

      <HowItWorks
        eyebrow={mineralHow.eyebrow}
        title={mineralHow.title}
        lead={mineralHow.lead}
        paragraphs={mineralHow.paragraphs}
      />

      <WhatWeTest
        eyebrow={mineralPanel.eyebrow}
        title={mineralPanel.title}
        paragraphs={mineralPanel.paragraphs}
        cta={mineralPanel.cta}
        groups={mineralPanel.groups}
      />

      <AppointmentSteps
        eyebrow={mineralAppointment.eyebrow}
        title={mineralAppointment.title}
        steps={mineralAppointment.steps}
      />

      <WhoItsFor
        eyebrow={mineralWhoFor.eyebrow}
        title={mineralWhoFor.title}
        standfirst={mineralWhoFor.standfirst}
        items={mineralWhoFor.items}
        cta={mineralWhoFor.cta}
      />

      <BeyondScan
        eyebrow={mineralBeyond.eyebrow}
        title={mineralBeyond.title}
        body={mineralBeyond.body}
        rows={mineralBeyond.rows}
        image={mineralBeyond.image}
      />

      <VipBand />

      <Faqs
        eyebrow={mineralFaqs.eyebrow}
        title={mineralFaqs.title}
        items={mineralFaqs.items}
      />

      <ClosingCta />
    </>
  );
}
