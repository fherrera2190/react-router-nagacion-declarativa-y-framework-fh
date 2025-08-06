import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getClients } from "@/fake/fake-data";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router";

export const ContactList = () => {
  const { data: clients, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: async () => getClients(),
    staleTime: 1000 * 60 * 5,
  });

  const { clientId } = useParams();

  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {isLoading && (
              <div className="animate-pulse space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-6 bg-gray-200 rounded-md"></div>
                ))}
              </div>
            )}
            {clients?.map((client) => (
              <NavLink
                to={`/chat/${client.id}`}
                key={client.id}
                className={({ isActive }) =>
                  `w-full flex items-center mt-3 transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 rounded-l-md shadow-md shadow-primary/50"
                      : ""
                  }`
                }
              >
                <div
                  className={`h-6 w-6 rounded-full bg-gray-300 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs ${
                    clientId === client.id
                      ? "bg-primary text-white font-semibold"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  {client.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-gray-600">{client.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};
