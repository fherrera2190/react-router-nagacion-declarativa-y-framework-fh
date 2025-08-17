import { useLoaderData, useParams } from "react-router";
import { ContactInformation } from "./ContactInformation";
import { ContactInformationSkeleton } from "./ContactInformationSkeleton";
import { NoContactSelected } from "./NoContactSelected";
import type { Client } from "~/chat/interfaces/chat.interface";
import { useNavigation } from "react-router";

interface Props {
  client?: Client;
}

export const ContactInformationCard = ({ client }: Props) => {
  const { id } = useParams();

  //const { clients } = useLoaderData<{ clients: Client[] }>();
  const { state } = useNavigation();
  const isPending = state === "loading" || state === "submitting";

  //console.log({ isPending, state });

  if (client) {
    return <ContactInformation client={client} />;
  }

  if (isPending) return <ContactInformationSkeleton />;

  if (!id) return <NoContactSelected />;

  if (!client) return <NoContactSelected />;

  return <ContactInformation client={client} />;
};
