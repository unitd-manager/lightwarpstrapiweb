import { Instagram, Youtube } from "lucide-react";

const SORA: React.CSSProperties = { fontFamily: '"Sora", sans-serif' };

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, (size: number) => React.ReactNode> = {
  instagram: (size) => <Instagram size={size} strokeWidth={1.5} />,
  tiktok: (size) => <TikTokIcon size={size} />,
  youtube: (size) => <Youtube size={size} strokeWidth={1.5} />,
};

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;

interface SocialLink {
  platform: string;
  url: string;
  publish?: boolean;
}

interface StrapiMedia {
  url: string;
  alternativeText?: string;
}

export interface FooterData {
  publish?: boolean;

  logo?: StrapiMedia;
  logo_link?: string;
  copyright_text?: string;

  contact_heading?: string;
  email?: string;
  email_link?: string;
  phone?: string;
  phone_link?: string;

  follow_heading?: string;
  social_links?: SocialLink[];

  meeting_heading?: string;
  meeting_link_label?: string;
  meeting_link_url?: string;
}

export function Footer({ data }: { data: FooterData }) {
  console.log("Rendering footer with:", data);

  // Whole footer hidden if its own publish flag is explicitly false.
  if (data?.publish === false) {
    return null;
  }

  const {
    logo,
    logo_link,
    copyright_text,
    contact_heading,
    email,
    email_link,
    phone,
    phone_link,
    follow_heading,
    social_links = [],
    meeting_heading,
    meeting_link_label,
    meeting_link_url,
  } = data ?? {};

  // Only show social links that are explicitly published (or don't have the flag yet).
  const visibleSocialLinks = social_links.filter((link) => link.publish !== false);

  return (
    <footer className="w-full bg-black/50 backdrop-blur-xl border-t border-white/10" style={SORA}>
      <div className="lw-container lw-section-tight">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[340px_1fr_1fr_1fr] gap-y-[60px] gap-x-[40px]">

          {/* Logo */}
          <div className="flex flex-col items-start gap-5">
            {logo?.url && (
              <a href={logo_link ?? "/"}>
                <img
                  src={logo.url.startsWith("http") ? logo.url : `${STRAPI_URL}${logo.url}`}
                  alt={logo.alternativeText ?? "Logo"}
                  className="h-[65px] w-auto object-contain lg:h-[180px] lg:w-[320px] lg:max-w-none"
                />
              </a>
            )}
            {copyright_text && (
              <p
                className="text-white hidden lg:block"
                style={{ fontSize: '16px', fontWeight: 300, lineHeight: '24px' }}
              >
                {copyright_text}
              </p>
            )}
          </div>

          {/* Contact for Inquiries */}
          {(email || phone) && (
            <div>
              {contact_heading && (
                <h6
                  className="text-white leading-[30px] mb-[20px]"
                  style={{ fontSize: '20px', fontWeight: 400 }}
                >
                  {contact_heading}
                </h6>
              )}
              <ul className="space-y-[8px]">
                {email && (
                  <li>
                    <a
                      href={email_link ?? `mailto:${email}`}
                      className="text-white hover:text-[#6250da] transition-colors"
                      style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
                    >
                      {email}
                    </a>
                  </li>
                )}
                {phone && (
                  <li>
                    <a
                      href={phone_link ?? `tel:${phone}`}
                      className="text-white hover:text-[#6250da] transition-colors"
                      style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
                    >
                      {phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Follow */}
          {visibleSocialLinks.length > 0 && (
            <div>
              {follow_heading && (
                <h6
                  className="text-white leading-[30px] mb-[20px]"
                  style={{ fontSize: '20px', fontWeight: 400 }}
                >
                  {follow_heading}
                </h6>
              )}
              <div className="flex items-center gap-3">
                {visibleSocialLinks.map((link, i) => {
                  const iconFn = SOCIAL_ICONS[link.platform?.toLowerCase()];
                  return (
                    <a
                      key={i}
                      aria-label={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#6250da] transition-colors"
                    >
                      {iconFn ? iconFn(20) : null}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Meet with us */}
          {meeting_link_url && (
            <div>
              {meeting_heading && (
                <h6
                  className="text-white leading-[30px] mb-[20px]"
                  style={{ fontSize: '20px', fontWeight: 400 }}
                >
                  {meeting_heading}
                </h6>
              )}
              <a
                href={meeting_link_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#6250da] transition-colors"
                style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
              >
                {meeting_link_label ?? meeting_link_url}
              </a>
            </div>
          )}
        </div>
      </div>

      {copyright_text && (
        <p
          className="lg:hidden text-white lw-container pb-[32px]"
          style={{ fontSize: '14px', fontWeight: 300, lineHeight: '24px' }}
        >
          {copyright_text}
        </p>
      )}

      <div className="border-t border-white/10" />
    </footer>
  );
}