import Head from "next/head";
import { GetStaticProps } from "next";
import LocationsList from "@/components/locations-list";
import { RestaurantSchema } from "@/mongoose/locations/schema";
import dbConnect from "@/middleware/dbConnect";
import { findAllLocations } from "@/mongoose/locations/services";

interface LocationProps {
  data: {
    locations: string;
  };
}

const Home = ({ data }: LocationProps) => {
  const locations: RestaurantSchema[] = JSON.parse(data.locations);
  const pageTitle = "Grub Hunter";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <LocationsList locations={locations} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await dbConnect();
  const locations = await findAllLocations();

  return {
    props: {
      data: {
        locations: JSON.stringify(locations),
      },
    },
  };
};

export default Home;
