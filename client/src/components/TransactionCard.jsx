const TransactionCard = ({ date, hits, atBats }) => {
  return (
    <div
      className={`flex justify-around items-center h-10 w-[100%] bg-white p-3 mb-1 shadow-sm ${
        hits / atBats < 0.3
          ? 'border-r-8 border-r-red-500'
          : 'border-r-8 border-r-green-500'
      }`}
    >
      <p>{date}</p>
      <p>{hits}</p>
      <p>{atBats}</p>
    </div>
  )
}

export default TransactionCard
