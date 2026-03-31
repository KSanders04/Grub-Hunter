import Head from "next/head";
import { GetServerSideProps } from "next";
import LocationDetails from "@/components/location-details";
import { RestaurantSchema } from "@/mongoose/locations/schema";
import dbConnect from "@/middleware/dbConnect";
import { findLocationById } from "@/mongoose/locations/services";

interface LocationPageProps {
  data: {
    location: string;
  };
}

const LocationPage = ({ data }: LocationPageProps) => {
  const location: RestaurantSchema = JSON.parse(data.location);
  const pageTitle = `${location.name}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <LocationDetails location={location} />
    </>
  );
};

const getServerSideProps: GetServerSideProps = async (context) => {
  const { locationId } = context.params as { locationId: string };

  await dbConnect();
  const location = await findLocationById({ id: locationId });

  if (!location) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        location: JSON.stringify(location),
      },
    },
  };
};

export { getServerSideProps };
export default LocationPage;
