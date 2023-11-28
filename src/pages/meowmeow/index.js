import Pagination from "@/components/reuseable/Pagination";
import Skeleton from "@/components/reuseable/Skeleton";
import { useEffect, useState } from "react";

export default function MeowMeow() {
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);

  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerCurrentPage, setRowsPerCurrentPage] = useState(10);

  const fetchData = async () => {
    setIsLoading(true);

    if (typeof window !== "undefined") {
      try {
        const response = await fetch(
          `/api/getAttendance?page=${currentPage}&rowsPerPage=${rowsPerCurrentPage}`
        );

        if (response.ok) {
          const data = await response.json();
          setIsLoading(false);
          setFetchedData(data);
          console.log("Data fetched successfully:", data);
          // Do something with the fetched data, if needed
        } else {
          setIsLoading(false);

          console.log("Something went wrong!");
        }
      } catch (error) {
        setIsLoading(false);

        console.error("Error making API call:", error);
      }
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        await fetchData();
        // Do something after the data is fetched, if needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [rowsPerCurrentPage, currentPage]);

  return (
    <div className="flex justify-center items-center bg-[#faf7f2] ">
      <div
        className="w-full "
        // className="max-w-sm flex flex-col items-center justify-center"
      >
        <div className="relative w-full h-screen pt-20 bg-[#faf7f2]">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-xl font-semibold text-gray-900">
                  Guestlist
                </h1>
                <p className="mt-2 text-sm text-gray-700">
                  A list of all the guest that answered to the form.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-[#cca878]">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            Phone number
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                          >
                            Attendance
                          </th>
                          <th
                            scope="col"
                            className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                          >
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      {isLoading && (
                        <tbody className="divide-y divide-gray-200 bg-white">
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              <Skeleton />
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <Skeleton />
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <Skeleton />
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <Skeleton />
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              {/* <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Edit
                                <span className="sr-only">, {item.name}</span>
                              </a> */}
                            </td>
                          </tr>
                        </tbody>
                      )}
                      {fetchedData?.data?.length > 0 && !isLoading && (
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {fetchedData?.data?.map((item) => (
                            <tr key={item.id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                {item.name}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {item.email}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {item.phoneNumber}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {item.attendance ? "Yes" : "No"}
                              </td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                {/* <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Edit
                                <span className="sr-only">, {item.name}</span>
                              </a> */}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      )}
                    </table>
                    {fetchedData?.data?.length > 0 && !isLoading && (
                      <Pagination
                        count={fetchedData?.pagination?.totalDocuments}
                        lastPage={fetchedData?.pagination?.totalPages}
                        from={fetchedData?.pagination?.from}
                        to={fetchedData?.pagination?.to}
                        pages={currentPage}
                        rows={rowsPerCurrentPage}
                        setPages={setCurrentPage}
                        setRows={setRowsPerCurrentPage}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
