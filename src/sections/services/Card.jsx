const Card = ({ card }) => {
  return (
    <div className="border border-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center gap-4 text-center">
      <img src={card.img} className="w-20" />
      <h2 className="text-3xl text-dark-blue-itlista">{card.title}</h2>
      <p className="text-lg">{card.text}</p>
    </div>
  );
};

export default Card;
