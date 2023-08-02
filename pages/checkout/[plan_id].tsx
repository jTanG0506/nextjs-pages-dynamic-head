import Metadata from "@/components/Metadata";
import { GetServerSidePropsContext } from "next";

export interface PlanIdProps {
  data: {
    planId: string;
    title: string;
  };
}

const PlanId = ({ data: { planId, title } }: PlanIdProps) => {
  return (
    <>
      <Metadata title={title} description={planId} />
      <h1>{title}</h1>
    </>
  );
};

async function getPaylinkDetails(planId: string) {
  return {
    planId,
    title: `Paying for ${planId}`,
  };
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const plan_id = context.query.plan_id;
  const result = await getPaylinkDetails(plan_id as string);

  return {
    props: {
      data: result,
    },
  };
}

export default PlanId;
