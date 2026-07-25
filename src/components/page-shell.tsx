import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, type NavbarData } from "./navbar";
import { Footer, type FooterData } from "./footer";
import { MouseLight } from "./mouse-light";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;

interface PageShellProps {
  children: ReactNode;
  copyrightText?: string;
}

export function PageShell({ children, copyrightText }: PageShellProps) {
  const { pathname } = useLocation();
  const [footerData, setFooterData] = useState<FooterData | undefined>();
  const [navbarData, setNavbarData] = useState<NavbarData | undefined>();

  useEffect(() => {
    async function fetchLayoutData() {
      try {
        // ✅ Strapi v5: populate with wildcard on pageBuilder — no "on" scoping needed
        const footerQuery =
          `filters[slug][$eq]=footer` +
          `&populate[pageBuilder][populate]=*`;

        const headerQuery =
          `filters[slug][$eq]=header` +
          `&populate[pageBuilder][populate]=*`;
        const [footerRes, headerRes] = await Promise.all([
          fetch(`${STRAPI_URL}/api/pages?${footerQuery}`),
          fetch(`${STRAPI_URL}/api/pages?${headerQuery}`),
        ]);

        const footerJson = await footerRes.json();
        const headerJson = await headerRes.json();

        console.log("PageShell footerJson:", footerJson);
        console.log("PageShell headerJson:", headerJson);

        // ✅ Strapi v5: data is array, first element, pageBuilder is flat array (no attributes wrapper)
        const footerPage = footerJson.data?.[0];
        const headerPage = headerJson.data?.[0];

        console.log("PageShell footerPage:", footerPage);
        console.log("PageShell headerPage:", headerPage);

        const footerBlock = footerPage?.pageBuilder?.find(
          (b: any) => b.__component === "acf-sections.footer-common-cta"
        );
        const headerBlock = headerPage?.pageBuilder?.find(
          (b: any) => b.__component === "acf-sections.header"
        );

        if (footerBlock) {
          // ✅ Map Strapi footer block fields → FooterData interface
          setFooterData({
            publish: footerBlock.publish,
            logo: footerBlock.logo ?? undefined,
            logo_link: footerBlock.logo_link ?? "/",
            copyright_text: footerBlock.copyright_text ?? undefined,
            contact_heading: footerBlock.contact_heading ?? undefined,
            email: footerBlock.email ?? undefined,
            email_link: footerBlock.email_link ?? undefined,
            phone: footerBlock.phone ?? undefined,
            phone_link: footerBlock.phone_link ?? undefined,
            follow_heading: footerBlock.follow_heading ?? undefined,
            social_links: footerBlock.social_links ?? [],
            meeting_heading: footerBlock.meeting_heading ?? undefined,
            meeting_link_label: footerBlock.meeting_link_label ?? undefined,
            meeting_link_url: footerBlock.meeting_link_url ?? undefined,
          });
        }

        if (headerBlock) {
          // ✅ Map Strapi header block fields → NavbarData interface
          setNavbarData({
            publish: headerBlock.publish,
            logo: headerBlock.logo ?? undefined,
            logo_link: headerBlock.logo_link ?? "/",
            nav_links: headerBlock.nav_links ?? [],
            cta_label: headerBlock.cta_label ?? "Contact Now",
            cta_url: headerBlock.cta_url ?? "/contact",
          });
        }
      } catch (err) {
        console.error("Failed to fetch layout data:", err);
      }
    }

    fetchLayoutData();
  }, []);

  return (
    <div className="relative min-h-screen">
      <MouseLight />
      <Navbar data={navbarData} />

      <div
        className="pt-[75px]"
        style={{ animation: "lwPageIn 0.6s ease-out forwards" }}
      >
        {children}
      </div>

      <Footer data={footerData!} />
    </div>
  );
}
