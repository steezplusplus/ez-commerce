const sortBy = ['Relevance', 'Trending', 'Latest Arrivals', 'Price: Low to high', 'Price: High to low'];

export async function Filter() {
  return (
    <nav>
      <h3 className='text-xs text-neutral-500 dark:text-neutral-400'>Sort by</h3>
      <ul>
        {sortBy.map((sort, i) => {
          return (
            <li key={`${sort}-${i}`} className="hover:underline mt-2 flex text-sm text-black dark:text-white">
              <label className="flex items-center text-sm font-light">
                {sort}
                <input 
                  type="radio"
                  className="hidden"
                  name='sort-by'
                />
              </label>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}