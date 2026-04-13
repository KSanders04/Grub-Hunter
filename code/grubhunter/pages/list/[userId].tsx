import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import LocationsList from "@/components/locations-list";
import dbConnect from "@/middleware/dbConnect";
import { findWishListLocations } from "@/mongoose/locations/services";

interface WishListProps {
  locations: string;
  userId: string;
}

export const WishListPage: NextPage<WishListProps> = ({
  locations,
  userId,
}) => {
  const { data: session } = useSession();

  const parsedLocations = JSON.parse(locations);
  const isOwner = session?.user?.fdlst_private_userId === userId;
  const pageTitle = isOwner ? "Your Wish List" : "Wish List";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <main>
        <h1>{pageTitle}</h1>

        {isOwner && parsedLocations.length === 0 && (
          <p>You have nothing on your wish list yet.</p>
        )}

        <LocationsList locations={parsedLocations} />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;
  try {
    await dbConnect();
    const locations = await findWishListLocations(userId);
    return {
      props: {
        locations: JSON.parse(JSON.stringify(locations)),
        userId: userId,
      },
    };
  } catch (error) {
    return {
      props: {
        locations: JSON.stringify([]),
        userId: userId,
      },
    };
  }
};
