import { useTranslation } from "react-i18next";

const Attractive = () => {
  const { t } = useTranslation();

  const marblePlaces = [
    {
      src: "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/528302041_1188055893340276_4225829609950739970_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=LUB1gie3_dsQ7kNvwEK2s0Y&_nc_oc=Adm87p9TjHI5zKQPTkMm7Ts6KyFRAXEq-yGfY4Faw4eYrWVCsVJQ48bnekNB25AYrVE&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=6fTunpZk8sRwVO7GO0RsgA&oh=00_AfWb78Tj8yJJuTUYQ5kQ7MRBPfYg7GgMxqhJU4CMzS1NTg&oe=68A3ADD1",
      title: t("marblePlaces.luxuryHall"),
    },
    {
      src: "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/518312987_1169901588489040_4355802765212672138_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EO5nCIQ2DB4Q7kNvwE0Dkvl&_nc_oc=AdmIERdXFXVRd0KW6hc8OQWMPakJ7rXWllGSIbV7tRfR4onej2yy1aGcVM8sXwElq3g&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=-srlJXzHj8n5d9_GGX3w-A&oh=00_AfXVTNu_ekLje2xvs5DMLN6nESwPzMbGHWkSX6RVNiUWOw&oe=68A39BF9",
      title: t("marblePlaces.modernKitchen"),
    },
    {
      src: "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/488533054_1089980786481121_960487930589959652_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=58Qsbe1Zj8MQ7kNvwFYd5mz&_nc_oc=Adk6GiclrzxsxV36FoMMs2MwMv-uYb0C_kwvP7WLGJ59Bya_78ERnxaQAuuaCBmlhbY&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=RjaDwJvzs-orvdeuz_cJ2A&oh=00_AfXdXGZxVoTjKbLR_51oBNZF8NMvDYW24WF5fa1j6hC40A&oe=68A3998B",
      title: t("marblePlaces.elegantStairs"),
    },
    {
      src: "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/518136100_1169918215154044_316972867073212087_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BgiJ2ZgTTLgQ7kNvwGrzfq4&_nc_oc=AdmlIcLQg7fC5WgKpvU7ourdnuEJNrMfR_mLo8wSAUNFyWn4DO4j4A2Sa3M4FigFt3U&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=M-kkPILqihYPWyu1p36I7g&oh=00_AfWj0ZnAgxcO1AHzqeimFhdOM-_mPkimQh2LVshe1DUu2w&oe=68A3A575",
      title: t("marblePlaces.premiumBathroom"),
    },
    {
      src: "https://media.istockphoto.com/id/1418784247/photo/luxury-hotel-lobby.jpg?s=612x612&w=0&k=20&c=6acpCJL56bu5DMs8LwkdY246wlH2eRFci0MKVyycLJw=",
      title: t("marblePlaces.hotelLobby"),
    },
    {
      src: "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/487467789_1089980643147802_1905666543367969190_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tVZPU8Z5lf8Q7kNvwGLe3vY&_nc_oc=AdnLc6Vd-OqcXOx5ztqnFg6LzRlUCQOS-jQ2Zphirx3Mm5htmhpGXGdMI9KGPKBAD3Y&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=yb6vehjOXnk772CKe4ZoDQ&oh=00_AfV8L_9SRhuywPAnW2GQItH9QhVrV52cLohKaDsTnkK6tg&oe=68A39B16",
      title: t("marblePlaces.wallCladding"),
    },
  ];

  return (
    <section className="max-w-[1920px] mx-auto bg-black py-16 px-4 sm:px-8 ">
      <div>
        <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-12">
          {t("attractiveSection.title")}
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          dir="ltr"
        >
          {marblePlaces.map((place, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={place.src}
                alt={place.title}
                loading="lazy"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {place.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractive;
