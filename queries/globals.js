export const globalsQuery = /* groq */ `
{
  // Kontakt/Company Settings (wie gehabt)
  "contactSettings": *[_type == "contactSettings"][0]{
    company,
    contact{ phone, email, street, zip, city, country },
    social{ instagram, facebook, linkedin, github },
    opening[],
    map
  },

  // Kontakt-CTA (Settings > KontaktCTA)
  "kontaktCta": *[_type == "kontaktCta"][0]{
    headline,
    text,
    phone,
    email
  },

  // CTA-Banner (Settings > CTABanner)
  "ctaBanner": *[_type == "ctaBanner"][0]{
    headline,
    subline,
    ctaLabel,
    ctaLink{
      external,
      // interner Verweis bleibt Referenz-Objekt; slug wenn vorhanden dazugereicht
      internal->{
        _type, _id, title,
        "slug": slug.current
      }
    }
  }
}
`;
