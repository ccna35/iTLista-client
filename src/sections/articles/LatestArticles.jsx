import Article from "./Article";

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "كيف تضع استراتيجية كتابة المحتوى التسويقي لشركتك",
      text: "بالتأكيد أنت تدرك فوائد التسويق بالمحتوى ولكنك ترغب في بناء استراتيجية كتابة المحتوى التسويقي الخاصة بشركتك. وهنا تتساءل عن كيفية",
      category: "كتابة المحتوى والمقالات",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "كيف تضع استراتيجية كتابة المحتوى التسويقي لشركتك",
      text: "بالتأكيد أنت تدرك فوائد التسويق بالمحتوى ولكنك ترغب في بناء استراتيجية كتابة المحتوى التسويقي الخاصة بشركتك. وهنا تتساءل عن كيفية",
      category: "كتابة المحتوى والمقالات",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "كيف تضع استراتيجية كتابة المحتوى التسويقي لشركتك",
      text: "بالتأكيد أنت تدرك فوائد التسويق بالمحتوى ولكنك ترغب في بناء استراتيجية كتابة المحتوى التسويقي الخاصة بشركتك. وهنا تتساءل عن كيفية",
      category: "كتابة المحتوى والمقالات",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "كيف تضع استراتيجية كتابة المحتوى التسويقي لشركتك",
      text: "بالتأكيد أنت تدرك فوائد التسويق بالمحتوى ولكنك ترغب في بناء استراتيجية كتابة المحتوى التسويقي الخاصة بشركتك. وهنا تتساءل عن كيفية",
      category: "كتابة المحتوى والمقالات",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "كيف تضع استراتيجية كتابة المحتوى التسويقي لشركتك",
      text: "بالتأكيد أنت تدرك فوائد التسويق بالمحتوى ولكنك ترغب في بناء استراتيجية كتابة المحتوى التسويقي الخاصة بشركتك. وهنا تتساءل عن كيفية",
      category: "كتابة المحتوى والمقالات",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "كيف تضع استراتيجية كتابة المحتوى التسويقي لشركتك",
      text: "بالتأكيد أنت تدرك فوائد التسويق بالمحتوى ولكنك ترغب في بناء استراتيجية كتابة المحتوى التسويقي الخاصة بشركتك. وهنا تتساءل عن كيفية",
      category: "كتابة المحتوى والمقالات",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-0 my-12">
      <div className="container m-auto">
        <h2
          className="text-4xl text-center text-orange-itlista leading-relaxed relative w-fit m-auto lg:before:w-40 lg:before:h-1 before:bg-dark-blue-itlista before:absolute before:rounded-full before:left-[118%] before:top-1/2 lg:after:w-40 lg:after:h-1 after:bg-dark-blue-itlista after:absolute after:rounded-full after:right-[118%] after:top-1/2
        hover:before:left-[110%] hover:after:right-[110%] before:transition-all after:transition-all before:duration-1000 after:duration-1000 mb-12"
        >
          أخر الأخبار والمقالات
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => {
            return <Article key={article.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
