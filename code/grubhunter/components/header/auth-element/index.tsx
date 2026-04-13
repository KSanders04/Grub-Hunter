import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@/components/button";
import Link from "next/link";
import styles from "./index.module.css";

export default function AuthElement() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (status === "authenticated") {
    const userId = session?.user?.fdlst_private_userId;
    if (!userId) {
      return null;
    }

    return (
      <>
        <span className={styles.name}>{session?.user?.name}</span>
        <nav className={styles.root}>
          <Button variant="outlined">
            <Link href={`/list/${userId}`}>Your Wish List</Link>
          </Button>
          <Button variant="blue" clickHandler={() => signOut()}>
            Sign Out
          </Button>
        </nav>
      </>
    );
  }

  if (status === "unauthenticated") {
    return (
      <nav className={styles.root}>
        <Button variant="blue" clickHandler={() => signIn()}>
          Sign In
        </Button>
      </nav>
    );
  }
}
