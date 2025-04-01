import Button from "../Button/Button";

export default function LandingPage() {
  return (
    <main className="py-24">
      <div className="w-full gap-4 max-md:gap-2 max-sm:gap-0 flex flex-col items-center justify-center ">
        <h1 className="text-6xl tracking-wide text-center font-bold text-white">
          Effortless Wealth
          <br />
          Tracking & Growth
        </h1>
        <p className="capitalize  text-white font-second tracking-wide font-bold mt-12 text-sm text-center ">
          Monitor your assets, analyze trends, and optimize your financial
          future
          <br />
          <span className="text-investing-green text-xl">all in one place</span>
        </p>
        <Button text="Try for free ->" link="/register" customClass="px-24 py-6 bg-investing-green text-2xl  mt-12 " />
      </div>
    </main>
  );
}
