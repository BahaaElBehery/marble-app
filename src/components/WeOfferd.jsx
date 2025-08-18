import { useTranslation } from "react-i18next";

const WeOfferd = () => {
  const { t } = useTranslation("common"); // namespace = weOffer.json

  const images = [
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/487157980_1088070433338823_5758923596437940285_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=u8126Bv_CjMQ7kNvwFpccCI&_nc_oc=AdnajsLH8CFiL6-d85dLIN2rAXGheC5mRNZAxZr_YJplrDt_FmJxk55p6YQTikQ4q0c&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=B41ectkVq045wELHx1OxfQ&oh=00_AfXLnZbkINRxHbPBnf5sMo5sBEVPQyqUOEUPQp7qre3vdw&oe=68A381FC",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/486782632_1086763473469519_822966224503507037_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nMLDEa1Z4lYQ7kNvwGqdaU6&_nc_oc=Adljlg1ZhA2828zXXJ-SKijo1nLtXC4bomYw6v_RBl5ssNpxraIhNz6XwhxSlZ-J170&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=B41ectkVq045wELHx1OxfQ&oh=00_AfUKl2QRdcbDZQ7s72OPVdG5PyUizTI-rivHyDg5KKHrQA&oe=68A3941B",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/486737980_1085502866928913_808469637236852724_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=a0HMoYjt5JsQ7kNvwFcmur4&_nc_oc=Adlry4DplR01xyZrUsb0jV8MB_LIbRwx-bU17wMOIG55fzqYHvo97w4M_0bJyB6q8Z4&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=IC71eSjZNzQS6V-MWCHxFw&oh=00_AfVKqUjkBp05aXYqfrGw27rNS2COR2Na2DFcRAOE9Dkbow&oe=68A38F53",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/486552941_1086762540136279_7983362576544345819_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NHwbpUkomw8Q7kNvwFAHnxf&_nc_oc=AdmmGXZYC5CqyMPVnlnVtd79oAysff5x8eVXETPmWrfL52gGgThbCoSnGvpDSdPYB-E&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=JZj29-3aYab-zAggcr_XvA&oh=00_AfU0cnxRg9LG0bwSPGsHYzDOO1f9qeOQYSC0_JqcFGK4QQ&oe=68A3A11C",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/487067576_1085943963551470_2470037092460937494_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QmSq0uXfq7oQ7kNvwFBaZUZ&_nc_oc=AdlxMOP0r-TML35BMyeb_F8zsauOKNMPoDwtQJReS0Xg36xaa-OOLr-MO-kiFwY9Q7g&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=08lAyenWfDYyUC5nRcITdQ&oh=00_AfXXzoA87ZZBAO6C5WBQu7OkYU7LDa78_ONrXLBkzms9dg&oe=68A3A6DA",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/487297687_1086763670136166_7236096159070969788_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kG7D5k4XMWwQ7kNvwHjHGPK&_nc_oc=AdmBcXksRHFkdlb0BGaIOwuzpUPt6314VwLDceJRxh3131xj0011GhHCUI23uZN2FJ8&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=B41ectkVq045wELHx1OxfQ&oh=00_AfX4YL_c217BoY4fGSUJhcHihP5puDTwHxfjA6v27NvTGA&oe=68A3B592",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/486660812_1086763250136208_1753517013093595748_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VNEueFQFTdAQ7kNvwFSN-N9&_nc_oc=AdligCKpdzomwTqLgvDQeaKGhlddYgULesoekWHwTjAWPF0yET1O1wmlYSDiEDMtOOo&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=Pj9j96gQK7ymr0rSHUe0Iw&oh=00_AfUSnsAN8GSO5lAeGq74q04XEqDomMsGCsqHS60r1S3iug&oe=68A398D1",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/487386764_1085502863595580_791976850773093569_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Z_8vWbBoSjkQ7kNvwHrXy3s&_nc_oc=Adm5CurNeZGlKbfD7_yiewYLF1PiQJ4IzTEa8W107cYA37RZTzoe2f7nCLpwHLFoXhM&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=lbnFvXw9kfl_3iYqXqTQsg&oh=00_AfVG18Lu_v_2DabYu1AkPiMnWjyPlXjvnjny3N6rqh-bNw&oe=68A3999C",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/486805916_1085502616928938_2040239660925995813_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=m78ctZgIyBIQ7kNvwHghZdz&_nc_oc=Adnxamo4umpYG7bvHz4KFT3IY6_lbxCl6PPjOKsZN87iHtJQwqNleCa0GUJGE1aSsug&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=a-K0iW0durZYbZPuM5XDew&oh=00_AfVuYKnd0MF32j0m34YqbmcvCKMcWDA6kqhWFvNyObewPg&oe=68A38F3D",
  ];

  return (
    <section className="max-w-[1920px] mx-auto py-16">
      <div className=" mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            {t("weOffer.title")}
          </h2>
          <p className="text-white mt-3">{t("weOffer.description")}</p>
        </div>

        {/* Masonry Style */}
        <div
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          dir="ltr"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Marble ${index + 1}`}
              className="w-full rounded-lg shadow-lg hover:opacity-90 hover:scale-[1.02] transition-transform duration-500"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOfferd;
