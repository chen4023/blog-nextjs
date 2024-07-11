type Props = {
  categories: string[];
  onClick: (category: string) => void;
};

export default function Categories({ categories, onClick }: Props) {
  return (
    <section className="flex flex-col items-center ml-3">
      <h2 className="text-xl font-bold border-b-2 border-blue-400 mb-1">
        Category
      </h2>
      <ul className="flex flex-col items-center">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className="cursor-pointer hover:text-blue-400"
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
