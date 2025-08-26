"use client";

import s from "./NotFound.module.scss";
import Ellipse from "@/helpers/components/Ellipse/Ellipse";
import Button from "@/components/CharacterUpgrade/components/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const handleReturn = () => {
    router.push("/");
  };

  return (
    <main className={s.root}>
      <Ellipse className={s.ellipse} />
      <div className={s.textBlock}>
        <h2 className={s.h2}>404</h2>
        <p className={s.lead}>Requested page not found</p>
      </div>
      <Button onClick={handleReturn}>Return to home page</Button>
    </main>
  );
}
