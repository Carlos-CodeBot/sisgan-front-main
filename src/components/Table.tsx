/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../api/ApiService";

interface TableProps {
  fullData: Array<{ [key: string]: any }>;
  data: Array<{ [key: string]: any }>;
  link: string;
  del: string;
}

export default function Table({
  fullData = [],
  data = [],
  link,
  del,
}: TableProps) {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [allSelected, setAllSelected] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const headers = Object.keys(data[0] || {});
  const filteredData = data.filter((row) =>
    headers.some((header) =>
      row[header].toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedRows([]);
    } else {
      const pageIndices = filteredData
        .slice(startIndex, endIndex)
        .map((_, index) => startIndex + index);
      setSelectedRows(pageIndices);
    }
    setAllSelected(!allSelected);
  };

  const toggleRowSelection = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleEdit = (rowData: string) => {
    const row = fullData.find((item) => item.id === rowData);
    console.log(row);
    navigate(link, { state: { data: row, isEdit: true } });
    // navigate(link, { state: { data: rowData, isEdit: true } });
  };

  const handleDelete = (index: number) => {
    ApiService.delete(`${del}`, [{ id: index }])
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    const tr = document.getElementById(index.toString());
    if (tr) {
      tr.remove();
    }
  };

  const handleDeleteSelected = () => {
    const newData = filteredData.filter((_, index) =>
      selectedRows.includes(startIndex + index)
    );
    newData.map((_row) => {
      handleDelete(_row.id);
    });
    setSelectedRows([]);
    setAllSelected(false);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setAllSelected(false);
    setSelectedRows([]);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  if (paginatedData.length === 0 && searchTerm === "") {
    return <p>No data available</p>;
  }

  const renderCellContent = (content: any) => {
    if (typeof content === "object" && content !== null) {
      return JSON.stringify(content);
    }
    return content;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="py-2 px-6 rounded-md bg-secondary-100"
        />
        <div className="flex gap-2">
          {selectedRows.length > 0 && (
            <button
              onClick={handleDeleteSelected}
              className="px-4 py-1.5 flex items-center gap-2 bg-red text-white rounded-md hover:bg-rose-700"
            >
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999919 10.6667C0.999919 11.4 1.59992 12 2.33325 12H7.66659C8.39992 12 8.99992 11.4 8.99992 10.6667V2.66667H0.999919V10.6667ZM9.66659 0.666667H7.33325L6.66659 0H3.33325L2.66659 0.666667H0.333252V2H9.66659V0.666667Z"
                  fill="white"
                />
              </svg>
              Eliminar
            </button>
          )}
          <NavLink
            to={link}
            className="px-4 py-1.5 flex items-center gap-2 bg-primary-100 text-white rounded-md hover:bg-primary-300"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 0C7.3866 0 7.7 0.313401 7.7 0.7V6.3H13.3C13.6866 6.3 14 6.6134 14 7C14 7.3866 13.6866 7.7 13.3 7.7H7.7V13.3C7.7 13.6866 7.3866 14 7 14C6.6134 14 6.3 13.6866 6.3 13.3V7.7H0.7C0.313401 7.7 0 7.3866 0 7C0 6.6134 0.313401 6.3 0.7 6.3H6.3V0.7C6.3 0.313401 6.6134 0 7 0Z"
                fill="white"
              />
            </svg>
            Añadir
          </NavLink>
        </div>
      </div>
      {paginatedData.length === 0 ? (
        <p>No data matches the search criteria</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  {headers.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                  <th className="px-6 py-3 text-left text-base font-bold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map((row, rowIndex) => (
                  <tr key={rowIndex} id={row.id}>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(startIndex + rowIndex)}
                        onChange={() =>
                          toggleRowSelection(startIndex + rowIndex)
                        }
                      />
                    </td>
                    {headers.map((header) => (
                      <td key={header} className="px-6 py-3 whitespace-nowrap">
                        {renderCellContent(row[header])}
                      </td>
                    ))}
                    <td className="px-6 py-3 whitespace-nowrap">
                      <button
                        onClick={() => handleEdit(row.id)}
                        className="px-4 py-3 bg-blue text-white rounded-md hover:bg-sky-400 mr-2"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 9.49992V11.9999H2.5L9.87333 4.62659L7.37333 2.12659L0 9.49992ZM11.8067 2.69325C11.8685 2.63158 11.9175 2.55832 11.951 2.47767C11.9844 2.39702 12.0016 2.31057 12.0016 2.22325C12.0016 2.13594 11.9844 2.04949 11.951 1.96884C11.9175 1.88819 11.8685 1.81493 11.8067 1.75325L10.2467 0.193254C10.185 0.131451 10.1117 0.0824196 10.0311 0.0489653C9.95043 0.015511 9.86398 -0.00170898 9.77667 -0.00170898C9.68935 -0.00170898 9.6029 0.015511 9.52225 0.0489653C9.4416 0.0824196 9.36834 0.131451 9.30667 0.193254L8.08667 1.41325L10.5867 3.91325L11.8067 2.69325Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDelete(row.id)}
                        className="px-4 py-3 bg-red text-white rounded-md hover:bg-rose-400"
                      >
                        <svg
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.999919 10.6667C0.999919 11.4 1.59992 12 2.33325 12H7.66659C8.39992 12 8.99992 11.4 8.99992 10.6667V2.66667H0.999919V10.6667ZM9.66659 0.666667H7.33325L6.66659 0H3.33325L2.66659 0.666667H0.333252V2H9.66659V0.666667Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <span>Filas por página:</span>
              <select
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                className="mx-2 px-2 py-1 border border-gray-300 rounded-md"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
            <div className="flex items-center">
              <span>Página:</span>
              <div className="flex items-center">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="mx-2 px-2 py-1 border border-gray-300 rounded-md"
                >
                  {"<"}
                </button>
                <span>{currentPage}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="mx-2 px-2 py-1 border border-gray-300 rounded-md"
                >
                  {">"}
                </button>
              </div>
              <span>de {totalPages}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
