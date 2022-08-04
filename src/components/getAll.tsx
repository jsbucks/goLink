import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";

const GetAll: NextPage = () => {
    const slugs = trpc.useQuery(["all"], {
        refetchOnReconnect: true, // replacement for enable: false which isn't respected.
        refetchOnMount: true,
        refetchOnWindowFocus: false,
    });
    console.log("🚀 ~ file: getAll.tsx ~ line 10 ~ slugs", slugs)
    if (slugs.isLoading || slugs.isIdle) {
        return <h1>Loading...</h1>;
    }
    if (slugs.error) {
        if (slugs.error) {
            return <p>{slugs.error.message}</p>;
        }
    }
    return (
        <div className="flex flex-col justify-center sm:w-2/3 md:w-1/2 lg:w-1/3">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            URL
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Shortcut
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Created At
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {slugs.data.map(slug => {
                        return (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="py-4 px-6">{slug.url}</td>
                                <td className="py-4 px-6">{slug.slug}</td>
                                <td className="py-4 px-6">{new Date(slug.createdAt).toDateString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default GetAll