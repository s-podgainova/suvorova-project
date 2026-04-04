import styles from "./FooterSocialLink.module.css";
import { Max } from "@/shared/icons/Max";
import { Instagram } from "@/shared/icons/Instagram";
import { TG } from "@/shared/icons/TG";

type FooterSocialLinkProps = {
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

export const FooterSocialLink = ({ socialType }: FooterSocialLinkProps) => {
  const social = socials[socialType];
  const Icon = social.icon;

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.social}
      aria-label={social.label}
    >
      <Icon />
    </a>
  );
};
