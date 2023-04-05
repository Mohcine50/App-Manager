import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const metadata = {
  title: "Apps Manager|Consoles",
  description: "Apps and consoles Manager",
};

export default async function ConsolePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const tHead: string[] = ["Name", "Apps", "Created At", "Status", "Action"];

  return (
    <main className="p-5">
      <div>
        <h2 className="text-lg font-bold">Consoles List:</h2>
        <form className="my-3">
          <label
            htmlFor="search"
            className="h-8 px-4 py-6 peer-focus/search:border-input-border peer-active/search:border-input-border rounded-lg bg-white w-[100%] border-[#9FA6B2] border placeholder:text-[#9FA6B2] inline-flex items-center gap-1 shadow-sm"
          >
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: 20, color: "gray" }}
            />
            <input
              type="text"
              placeholder="Search Form console"
              id="search"
              className="peer/search w-[100%]  outline-none"
            />
          </label>
        </form>
        <button className="px-4 py-3 font-normal text-white rounded-md bg-indigo">
          Add a Console
        </button>
      </div>
      <div className="p-5 mt-5 bg-white rounded-lg">
        <table className="table-auto w-[100%]">
          <thead>
            <tr>
              {tHead.map((title, idx) => {
                return (
                  <th
                    key={idx}
                    className="py-3 text-base font-medium text-left text-gray-400 capitalize"
                  >
                    {title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {[1, 1, 1, 1, 1].map((d, idx) => {
              return (
                <tr key={idx} className="h-12 border-b border-gray-200">
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                  <td>Malcolm Lockyer</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="px-2 py-1 text-green-500 border-2 border-green-500 rounded-md outline-none">
                        Edit
                      </button>
                      <button className="px-2 py-1 text-white bg-red-600 rounded-md outline-none">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
