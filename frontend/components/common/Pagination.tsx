import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationComponent {
  itemsPerPage: number;
  totalData: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PaginationComponent = ({
  itemsPerPage,
  totalData,
  currentPage,
  setCurrentPage,
}: PaginationComponent) => {
  const totalPages = Math.ceil(totalData / itemsPerPage);
  
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(currentPage - half, 1);
    const end = Math.min(start + maxVisiblePages - 1, totalPages);

    //adjusting start point if we are in the end of pagination
    if (end - start < maxVisiblePages - 1) {
      start = Math.max(end - maxVisiblePages + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className={`${currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
              onClick={() => goToPage(currentPage - 1)}
            />
          </PaginationItem>

          {getPageNumbers().map((pageNum) => {
            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  isActive={pageNum === currentPage}
                  onClick={() => goToPage(pageNum)}
                  className="cursor-pointer"
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          {totalPages > 5 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationNext
              href="#"
              className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
              onClick={() => goToPage(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
