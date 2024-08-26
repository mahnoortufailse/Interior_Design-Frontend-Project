export function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
  
    const onPageChange = (page: number) => setCurrentPage(page);
  
    // Get the current page component
    const CurrentPageComponent = pages[currentPage - 1];
  
    return (
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <CurrentPageComponent />
        </div>
        <div className="overflow-x-auto sm:justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={pages.length}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    );
  }
  