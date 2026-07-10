import { useEffect, useState } from "react";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL as string;

interface TeamMember {
  id: number;
  name?: string;
  role?: string;
  photo?: { url: string; alternativeText?: string };
}

export interface TeamSectionProps {
  main_title?: string;
  sub_title?: string;
  main_description?: string;
  sub_description?: string;
  team_members?: { id: number } | TeamMember[] | null;
}

function resolveUrl(url?: string) {
  if (!url) return undefined;
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

export function TeamSection({
  main_title,
  sub_title,
  main_description,
  sub_description,
  team_members,
}: TeamSectionProps) {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    if (Array.isArray(team_members)) {
      setMembers(team_members);
      return;
    }
    const componentId = (team_members as any)?.id;
    if (!componentId) return;

    async function fetchMembers() {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/about-team-sections/${componentId}?populate[team_members][populate]=*`
        );
        if (!res.ok) return;
        const json = await res.json();
        setMembers(json.data?.team_members ?? []);
      } catch (err) {
        console.error("Failed to fetch team members:", err);
      }
    }
    fetchMembers();
  }, [team_members]);

  // WordPress layout: first member = lead (centered, big photo)
  // Remaining = associates grid (3 cols, name + role only, no photos)
  const lead = members[0];
  const associates = members.slice(1);
  const description = main_description ?? sub_description;

  return (
    <section className="lw-container lw-section">

      {/* Section title — "Meet our Team" centered */}
      {main_title && (
        <div className="text-center mb-12">
          {sub_title && (
            <p className="text-[#6250da] font-semibold uppercase tracking-widest text-xs mb-2">
              {sub_title}
            </p>
          )}
          <h2 className="text-white text-3xl lg:text-4xl font-bold">{main_title}</h2>
          {description && (
            <p className="text-white/60 mt-3 text-sm max-w-xl mx-auto">{description}</p>
          )}
        </div>
      )}

      {/* Lead member — photo centered, large */}
      {lead && (
        <div className="text-center mb-14">
          {lead.photo?.url ? (
            <img
              src={resolveUrl(lead.photo.url)}
              alt={lead.photo.alternativeText ?? lead.name ?? ""}
              className="w-44 h-44 rounded-full object-cover mx-auto mb-5 border-4 border-[#6250da]/30"
            />
          ) : (
            // Placeholder circle if no photo
            <div className="w-44 h-44 rounded-full bg-white/10 mx-auto mb-5 border-4 border-[#6250da]/30" />
          )}
          {lead.name && (
            <h3 className="text-white text-2xl font-bold">{lead.name}</h3>
          )}
          {lead.role && (
            <p className="text-white/55 text-sm mt-1">{lead.role}</p>
          )}
        </div>
      )}

      {/* Associates sub-heading — "Our Associates" */}
      {associates.length > 0 && (
        <>
          <div className="text-center mb-10">
            <h3 className="text-white text-2xl lg:text-3xl font-bold">
              {sub_title ?? "Our Associates"}
            </h3>
          </div>

          {/* 3-column name+role grid — no photos, matching WP */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
            {associates.map((member) => (
              <div key={member.id} className="text-center">
                {member.photo?.url && (
                  <img
                    src={resolveUrl(member.photo.url)}
                    alt={member.photo.alternativeText ?? member.name ?? ""}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-white/10"
                  />
                )}
                {member.name && (
                  <h4 className="text-white font-bold text-lg leading-snug">{member.name}</h4>
                )}
                {member.role && (
                  <p className="text-white/50 text-sm mt-0.5">{member.role}</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
