import { ResolvingMetadata, Metadata } from "next";
type Props = {
  searchParams: string;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  console.log(searchParams);

  return {
    title: "no esta jalando veg",
  };
}
