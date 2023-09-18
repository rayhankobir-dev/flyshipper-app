export default function SectionTitle({
  title = "",
  subTitle = "",
  description = "",
}) {
  return (
    <section className="max-w-2xl mx-auto mb-8 pt-20">
      <h3 className="font-semibold text-md text-center bg-gray-100 rounded-full w-fit mx-auto px-4 py-1">
        {title}
      </h3>
      <h1 className="py-1 font-extrabold text-4xl text-gray-800 text-center">
        {subTitle}
      </h1>
      <p className="font-light text-center text-sm py-1">{description}</p>
    </section>
  );
}
