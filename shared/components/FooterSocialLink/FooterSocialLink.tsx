import { MaxIcon } from "@/shared/icons/MaxIcon";
import { InstagramIcon } from "@/shared/icons/InstagramIcon";
import { TGIcon } from "@/shared/icons/TGIcon";
import styles from "./FooterSocialLink.module.css";
import { Max } from "@/shared/icons/Max";
import { Instagram } from "@/shared/icons/Instagram";
import { TG } from "@/shared/icons/TG";
import { Instagr } from "@/shared/icons/Instagr";

type FooterSocialLinkProps = {
  href?: string;
  socialType: "instagram" | "tg" | "max";
};

const socials = {
  instagram: {
    href: "https://www.instagram.com/sofiamaria.suvorova",
    icon: Instagram,
    label: "Instagram",
  },
  tg: {
    href: "https://t.me/sm_suvorova",
    icon: TG,
    label: "Telegram",
  },
  max: {
    href: "https://max.ru/u/f9LHodD0cOJXAgwY7oC2CGRoSNED44j_N7HfGw6M4wiMf320vyUuKgJmYlY",
    icon: Max,
    label: "Max",
  },
};

export const FooterSocialLink = ({
  href,
  socialType,
}: FooterSocialLinkProps) => {
  const social = socials[socialType];
  const Icon = social.icon;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.social}
    >
      <Icon />
    </a>
  );
};
