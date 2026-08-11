import { FadeIn } from "@/hooks/FadeIn";
import { resolveStrapiImage } from "@/lib/resolve-strapi-image";

const FOUNDER_PHOTO_TARGET_WIDTH = 400;
const ASSOCIATE_PHOTO_TARGET_WIDTH = 260;

function chunkIntoThrees<T>(arr: T[]): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < arr.length; i += 3) rows.push(arr.slice(i, i + 3));
  return rows;
}

export function AboutPanelTeam({ data }: { data?: any }) {
  if (data?.Publish === false) return null;

  const teamMembersBlock = data?.TeamMembers;
  const teamMembersPublished = teamMembersBlock?.Publish !== false;

  const allMembers = teamMembersPublished ? (teamMembersBlock?.Member ?? []) : [];
  const members = allMembers.filter((m: any) => m.Publish !== false);

  const founderEntry = members.find((m: any) => m.is_founder) || members[0];
  const associateEntries = members.filter((m: any) => m !== founderEntry);

  const founder = founderEntry
    ? {
        name: founderEntry.Name,
        designation: founderEntry.Designation,
        photo: resolveStrapiImage(founderEntry.ProfilePicture, FOUNDER_PHOTO_TARGET_WIDTH),
      }
    : null;

  const associateRows: any[][] = chunkIntoThrees(
    associateEntries.map((m: any) => ({
      name: m.Name,
      role: m.Designation,
      photo: resolveStrapiImage(m.ProfilePicture, ASSOCIATE_PHOTO_TARGET_WIDTH),
    }))
  );

  const mainTitle = data?.MainTitle || "Meet our Team";
  const subTitle = data?.SubTitle || "Our Associates";

  if (!founder && associateRows.length === 0) return null;

  return (
    <section
      style={{ fontFamily: '"Sora", sans-serif', overflow: "hidden" }}
      className="flex flex-col gap-[50px] px-[2%] pt-[3%] pb-[1%] min-h-[380px] mb-[60px]"
    >
      <FadeIn as="h2" className="w-full text-center text-white" style={{
        fontFamily: '"Sora", sans-serif',
        fontSize: "clamp(28px, 4vw, 45px)",
        fontWeight: 600,
        lineHeight: "60px",
        letterSpacing: "-1px",
      }}>
        {mainTitle}
      </FadeIn>

      {/* Founder */}
      {founder && (
        <div className="flex justify-center" style={{ marginTop: "-20px" }}>
          <FadeIn
            y={30}
            className="text-center founder-box"
            style={{ width: "29%", maxWidth: "29%" }}
          >
            {founder.photo && (
              <div
                style={{
                  width: "50%",
                  margin: "0 auto",
                  overflow: "hidden",
                  borderRadius: "25px",
                  border: "2px solid white",
                }}
              >
                <img
                  src={founder.photo.src}
                  alt={founder.name}
                  width={founder.photo.width}
                  height={founder.photo.height}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                  }}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            )}
            <h3
              className="founder-name text-white"
              style={{
                fontFamily: '"Sora", sans-serif',
                fontSize: "40px",
                fontWeight: 600,
                lineHeight: "60px",
                letterSpacing: "-1px",
                marginBottom: "20px",
                marginTop: 0,
              }}
            >
              {founder.name}
            </h3>
            <p
              className="founder-role text-white"
              style={{
                fontFamily: '"Sora", sans-serif',
                fontSize: "22px",
                fontWeight: "normal",
                lineHeight: "30px",
                letterSpacing: 0,
              }}
            >
              {founder.designation}
            </p>
          </FadeIn>
        </div>
      )}

      {teamMembersPublished && associateRows.length > 0 && (
        <FadeIn as="h2" className="w-full text-center text-white" style={{
          fontFamily: '"Sora", sans-serif',
          fontSize: "clamp(28px, 4vw, 45px)",
          fontWeight: 600,
          lineHeight: "60px",
          letterSpacing: "-1px",
          marginTop: "10px",
        }}>
          {subTitle}
        </FadeIn>
      )}

      {associateRows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="associate-row flex flex-row flex-wrap justify-around px-[3%]"
          style={{ marginBottom: 0 }}
        >
          {row.map((m, i) => (
            <FadeIn
              key={m.name}
              delay={(rowIdx * 3 + i) * 0.05}
              duration={0.4}
              className="associate-item text-center"
              style={{ width: "30%", maxWidth: "30%", alignSelf: "center" }}
            >
              {m.photo && (
                <div
                  style={{
                    width: "50%",
                    margin: "0 auto 20px",
                    overflow: "hidden",
                    borderRadius: "25px",
                    border: "2px solid white",
                  }}
                >
                  <img
                    src={m.photo.src}
                    alt={m.name}
                    width={m.photo.width}
                    height={m.photo.height}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
              <h3
                className="associate-name text-white"
                style={{
                  fontFamily: '"Sora", sans-serif',
                  fontSize: "40px",
                  fontWeight: 600,
                  lineHeight: "60px",
                  letterSpacing: "-1px",
                  marginBottom: "20px",
                }}
              >
                {m.name}
              </h3>
              <p
                className="associate-role text-white"
                style={{
                  fontFamily: '"Sora", sans-serif',
                  fontSize: "22px",
                  fontWeight: "normal",
                  lineHeight: "30px",
                  letterSpacing: 0,
                }}
              >
                {m.role}
              </p>
            </FadeIn>
          ))}
        </div>
      ))}
    </section>
  );
}