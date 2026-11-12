import type { ReactNode } from "react";

import styles from "./Contacts.module.css";

export default function ContactsLayout({ children }: { children: ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}
