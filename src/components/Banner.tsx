export type BannerData = {
  message: string;
  state: "success" | "error";
};

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "🔥";
  return (
    <p
      className={`p-3 ${
        isSuccess ? "bg-green-200" : `bg-red-200`
      } w-full text-center text-gray-600 rounded-lg font-bold text-xl`}
    >{`${icon} ${message}`}</p>
  );
}
