const Article = () => {
  return (
    <article className="rounded-lg bg-white shadow-lg relative overflow-hidden">
      <span className="bg-orange-itlista py-2 px-4 text-white absolute top-4 left-4 rounded-md text-sm">
        كتابة المحتوى والمقالات
      </span>
      <div className="img-container h-64">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="content p-4 flex flex-col gap-4 text-dark-grey-itlista">
        <h2 className="text-xl font-medium">
          أهمية السيو في الموقع الالكتروني|تعرف مع أفكارز
        </h2>
        <p className="text-lg">
          يعدّ الإنترنت من أهم وأسرع وسائل البحث والتحقق من المعلومات في العصر
          الحالي، وقد تحولت الشبكة العنكبوتية إلى وسيلة أساسية
        </p>
        <button className="hidden lg:block py-2 px-4 rounded-md bg-dark-blue-itlista text-white transition-colors duration-300 hover:bg-medium-blue-itlista">
          اقرأ المزيد
        </button>
      </div>
    </article>
  );
};

export default Article;
