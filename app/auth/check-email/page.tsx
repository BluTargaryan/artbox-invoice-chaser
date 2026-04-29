import MiniLink from "@/app/components/atoms/MiniLink";

export default function CheckEmailPage() {
  return (
    <>
      <h1 className="w-[270px] text-center md:w-[322px] xl:w-[446px]">Check your email</h1>
      <p className="w-[270px] text-center md:w-[322px] xl:w-[446px]">
        If an account exists for that email, you&apos;ll receive a link to continue. You can close this tab once
        you&apos;ve clicked the link.
      </p>
      <div className="flex flex-col items-center justify-center gap-5 xl:gap-8">
        <MiniLink href="/auth/signin" text="Back to sign in" />
      </div>
    </>
  );
}

