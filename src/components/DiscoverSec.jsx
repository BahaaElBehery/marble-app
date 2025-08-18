import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const DiscoverSec = () => {
  const { t } = useTranslation();

  const marbleImages = [
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/505842633_1143775614434971_1012025026079968027_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=D2dSi8S9m8kQ7kNvwHooZxn&_nc_oc=Adm2m61-7KMkOMTIy_VVOcGNCwsH1TmCUfCCoZwxlXkyIwgU1edWtAb18lnegQbWiNQ&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=iHEVXjRDr1LmOlvL-tIkoA&oh=00_AfW1uwwMnzJQNwvBXvbQUEE_xyfvbujvUGPqurJcEMgw0g&oe=68A0FCDD",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/505675868_1143772601101939_3805707370655912499_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=X7Kp-DJxgisQ7kNvwFEOHrl&_nc_oc=AdmV3loyZUtby2ogoXxbPs17rwO8IXco-AURxtedblnhV3QwmF88-M9GAtqqGqBILdQ&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=XUgLXVgN42yjDt-eZoZIwQ&oh=00_AfVDbnvXH_3V6lp65sSBRxnTJJVw_GC7AcGzY3gH3zWJvw&oe=68A10A3A",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/495156447_1118694613609738_2866032502256841894_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3SmmRMODP_AQ7kNvwEZgpmn&_nc_oc=AdkOkbfSdZMJwNBUDn0UHRkYiZ7S3lGKioqsR3pSG_Ki8S1vYFLtDPsDyWyW2vCG-I0&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=PaAP__2VxeqFlehQ-0w_Kg&oh=00_AfWAknG09JWJknJ7l1IP04g3zMGn55MBSNDJpLhaTCLVBw&oe=68A11E78",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/488601933_1092382956240904_166858096221205884_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1vEGbwNqSjYQ7kNvwEKJHlp&_nc_oc=AdlpTd21Kqbxa4FuXOGyXZGeRIu-Op1Kh2yket0I3MvqJXqpkS1-WcEhi7lBYBEVgwA&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=zwCaOsVZOB1dAskEkHIsYA&oh=00_AfUpiSWJ6rc41J2ZDNWcgpwCfPS7sYgISNr780Nv4DqRmA&oe=68A1055D",
  ];

  return (
    <section className="w-11/12 max-w-[1920px] mx-auto py-16 px-6">
      <div className="grid lg:grid-cols-1 gap-10 items-center">
        {/* النص */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold max-sm:text-2xl dark:text-gray-100">
            {t("discoverSec.title")}
          </h2>
          <p className="mt-4 max-sm:text-xs text-gray-300 dark:text-gray-300 leading-relaxed">
            {t("discoverSec.description")}
          </p>
        </motion.div>

        {/* الصور */}
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4" dir="ltr">
          {marbleImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Marble ${index + 1}`}
              className="rounded-lg object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 shadow-lg"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSec;
