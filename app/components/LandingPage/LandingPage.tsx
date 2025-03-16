import Image from "next/image";
import Button from "../Button/Button";
import landingPageUrl from '@/app/assets/landingPage.jpg';

export default function LandingPage() {
  return (
    <main className="flex">
      <section>
        <h1>Take Care of Your Finacial Life</h1>
        <p>
          Maximize Your Wealth, Minimize Your Worries, Invest in Your Future
        </p>
        <div className="flex justify-between">
          <Button link="/login" text="Try For Free" isActive={true} />
          <Button link="/about" text="How It's Work" />
        </div>
        <div>
          <div>
            <h2>1.4K</h2>
            <p>Global Users</p>
          </div>
          <div>
            <h2>5.3K</h2>
            <p>Positive Reviews</p>
          </div>
        </div>
      </section>
      <div>
        <Image className="rounded-lg" src={landingPageUrl}width={ 500} height={500}  alt="" />
      </div>
    </main>
  );
}
