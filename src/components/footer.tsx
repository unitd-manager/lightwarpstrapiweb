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
  Platform: string;
  URL: string;
  Publish?: boolean;
}

interface StrapiMedia {
  url: string;
  alternativeText?: string;
}

export interface FooterData {
  Publish?: boolean;

  Logo?: StrapiMedia;
  LogoLink?: string;
  CopyrightText?: string;

  ContactHeading?: string;
  Email?: string;
  EmailLink?: string;
  PhoneLink?: string;
  Phone?: string;

  FollowHeading?: string;
  SocialLinks?: SocialLink[];

  MeetingHeading?: string;
  LinkLabel?: string;
  LinkURL?: string;
}

export function Footer({ data }: { data: FooterData }) {
  console.log("Rendering footer with:", data);

  // Whole footer hidden if its own publish flag is explicitly false.
  if (data?.Publish === false) {
    return null;
  }

  const {
    Logo,
    LogoLink,
    CopyrightText,
    ContactHeading,
    Email,
    EmailLink,
    Phone,
    PhoneLink,
    FollowHeading,
    SocialLinks = [],
    MeetingHeading,
    LinkLabel,
    LinkURL,
  } = data ?? {};

  // Only show social links that are explicitly published (or don't have the flag yet).
  const visibleSocialLinks = SocialLinks.filter((Link) => Link.Publish !== false);

  return (
    <footer className="w-full bg-black/50 backdrop-blur-xl border-t border-white/10" style={SORA}>
      <div className="lw-container lw-section-tight">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[340px_1fr_1fr_1fr] gap-y-[60px] gap-x-[40px]">

          {/* Logo */}
          <div className="flex flex-col items-start gap-5">
            {Logo?.url && (
              <a href={LogoLink ?? "/"}>
                <img
                  src={Logo.url.startsWith("http") ? Logo.url : `${STRAPI_URL}${Logo.url}`}
                  alt={Logo.alternativeText ?? "Logo"}
                  className="h-[65px] w-auto object-contain lg:h-[180px] lg:w-[320px] lg:max-w-none"
                />
              </a>
            )}
            {CopyrightText && (
              <p
                className="text-white hidden lg:block"
                style={{ fontSize: '16px', fontWeight: 300, lineHeight: '24px' }}
              >
                {CopyrightText}
              </p>
            )}
          </div>

          {/* Contact for Inquiries */}
          {(Email || Phone) && (
            <div>
              {ContactHeading && (
                <h6
                  className="text-white leading-[30px] mb-[20px]"
                  style={{ fontSize: '20px', fontWeight: 400 }}
                >
                  {ContactHeading}
                </h6>
              )}
              <ul className="space-y-[8px]">
                {Email && (
                  <li>
                    <a
                      href={EmailLink ?? `mailto:${Email}`}
                      className="text-white hover:text-[#6250da] transition-colors"
                      style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
                    >
                      {Email}
                    </a>
                  </li>
                )}
                {Phone && (
                  <li>
                    <a
                      href={PhoneLink ?? `tel:${Phone}`}
                      className="text-white hover:text-[#6250da] transition-colors"
                      style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
                    >
                      {Phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Follow */}
          {visibleSocialLinks.length > 0 && (
            <div>
              {FollowHeading && (
                <h6
                  className="text-white leading-[30px] mb-[20px]"
                  style={{ fontSize: '20px', fontWeight: 400 }}
                >
                  {FollowHeading}
                </h6>
              )}
              <div className="flex items-center gap-3">
                {visibleSocialLinks.map((Link, i) => {
                  const iconFn = SOCIAL_ICONS[Link.Platform?.toLowerCase()];
                  return (
                    <a
                      key={i}
                      aria-label={Link.Platform}
                      href={Link.URL}
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
          {LinkURL && (
            <div>
              {MeetingHeading && (
                <h6
                  className="text-white leading-[30px] mb-[20px]"
                  style={{ fontSize: '20px', fontWeight: 400 }}
                >
                  {MeetingHeading}
                </h6>
              )}
              <a
                href={LinkURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#6250da] transition-colors"
                style={{ fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}
              >
                {LinkLabel ?? LinkURL}
              </a>
            </div>
          )}
        </div>
      </div>

      {CopyrightText && (
        <p
          className="lg:hidden text-white lw-container pb-[32px]"
          style={{ fontSize: '14px', fontWeight: 300, lineHeight: '24px' }}
        >
          {CopyrightText}
        </p>
      )}

      <div className="border-t border-white/10" />
    </footer>
  );
}