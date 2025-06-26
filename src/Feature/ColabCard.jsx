

const ColabCard = ({ event }) => {
  const {  image, name, organization } = event;

  return (
    <div className="w-72 bg-gray-200 dark:bg-base-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">    


      <figure className="h-44 w-full overflow-hidden">
       
        <img
          src={image}
          alt={name}
          className="h-full  "
        />       
      </figure> 

      <div className="p-5 space-y-3">
        <h2 className="text-l font-bold text-gray-800 dark:text-gray-100">
          {name}
        </h2>
        <h2 className="text-sm text-gray-500 dark:text-gray-100">Collaboration with <s></s> 
          {organization}
        </h2>        

      </div>
    </div>
  );
};

export default ColabCard;
